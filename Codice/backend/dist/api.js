"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsHeaders = void 0;
function get_env_or_throw(name) {
    const temp = process.env[name];
    if (!temp) {
        throw new Error(`${name} not defined`);
    }
    return temp;
}
const supabase_js_1 = require("@supabase/supabase-js");
const supabaseClient = (0, supabase_js_1.createClient)(get_env_or_throw("SUPABASE_URL"), get_env_or_throw("SUPABASE_SERVICE_ROLE_KEY"), { auth: { persistSession: false } });
exports.corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Credentials": true,
};
function initAPI(app) {
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
        res.header("Access-Control-Allow-Headers", "Content-Type");
        res.header("Access-Control-Allow-Credentials");
        next();
    });
    app.options("/api/*", async (req, res) => {
        res.status(200).json(exports.corsHeaders);
    });
    app.post("/api/amicizie", async (req, res) => {
        const { username, amico } = req.body;
        //check for forbidden
        const { data, error } = await supabaseClient
            .from("utenti")
            .select("*")
            .eq("username", amico);
        if (error)
            console.error(error);
        if (data?.length == 0) {
            res.status(404).send(`Non ho trovato utenti con nome ${amico}`);
            return;
        }
        else if (data) {
            const { data: updatedRows, error } = await supabaseClient
                .from("amicizie")
                .insert({ utente_destinatario: username, utente_richiedente: amico })
                .select().single();
            if (error) {
                if (error.code == "23505") {
                    res.status(204);
                    return;
                }
            }
            if (updatedRows) {
                res.status(200).send("OK");
                return;
            }
        }
    });
    app.get("/api/amicizie", async (req, res) => {
        const utente = req.query.utente;
        const { data, error } = await supabaseClient
            .from("amicizie")
            .select("*, utenti!utente_destinatario(*)")
            .or(`utente_richiedente.eq.${utente},utente_destinatario.eq.${utente}`);
        if (error) {
            console.log(error);
            throw error;
        }
        if (data) {
            if (data.length == 0) {
                res.status(204).send();
                return;
            }
            res.status(200).send(data.map(e => {
                console.log(e.utenti);
                return {
                    username: e.utente_destinatario,
                    // @ts-ignore
                    numero: e.utenti.telefono,
                    // @ts-ignore
                    PP: e.utenti.PP
                };
            }));
            return;
        }
    });
    app.post("/api/signup", async (req, res) => {
        const { email, password, telefono, username, } = req.body;
        //check for forbidden
        const { data, error } = await supabaseClient
            .from("utenti")
            .insert({
            email,
            password,
            telefono,
            username,
        })
            .select("*");
        if (data) {
            res.status(200).send("Utente registrato con successo");
        }
        else {
            console.log(error);
            res.status(400).send("Impossibile loggare");
        }
    });
    app.post("/api/login", async (req, res) => {
        const { username, password } = req.body;
        //check for forbidden
        const { data, error } = await supabaseClient
            .from("utenti")
            .select("*")
            .eq("username", username)
            .eq("password", password)
            .single();
        console.log(req.body, username, password, data);
        if (data) {
            res.status(200).send("Utente loggato con successo");
        }
        else {
            res.status(403).send("Impossibile loggare");
        }
    });
    app.get("/api/profilo", async (req, res) => {
        const { username } = req.query;
        console.log(username);
        const { data, error } = await supabaseClient
            .from("utenti")
            .select("*")
            .eq("username", username)
            .single();
        console.log(req.body, username);
        if (data) {
            res.status(200).send(data);
        }
        else {
            res.status(403).send("Impossibile trovare");
        }
    });
    // //PP calculator
    app.post("/api/ppcalc", async (req, res) => {
        let { winner: winner_, looser: looser_ } = req.body;
        console.log(winner_, looser_);
        const winner = winner_;
        const looser = looser_;
        //winner PASSATO VINCE SEMPRE
        if (!winner || !looser) {
            res.status(400).send("Input sbagliato");
            return;
        }
        try {
            const { data, error } = await supabaseClient
                .from("utenti")
                .select("*")
                .or(`username.eq.${winner},username.eq.${looser}`);
            let elo1 = -1;
            let elo2 = -1;
            if (error)
                throw error;
            if (data) {
                data.map((x) => {
                    if (x.username == winner) {
                        elo1 = x.PP;
                    }
                    if (x.username == looser) {
                        elo2 = x.PP;
                    }
                });
                if (elo1 == -1 || elo2 == -1) {
                    return res.status(404).send("Uno dei due utenti non esiste o ha eliminato l'account durante la partita");
                }
                let pa = 1 / (1 + 10 * ((elo1 - elo2) / 400));
                let pb = 1 / (1 + 10 * ((elo2 - elo1) / 400));
                pa = 30 * (1 - pa) + 10;
                pb = -(30 * (1 - pb)) + 10;
                elo1 = elo1 + pa;
                elo2 = elo2 + pb;
                elo1 = Math.round(elo1);
                elo2 = Math.round(elo2);
                console.log(elo1, elo2);
            }
            const { data: updatedRows, error: error2 } = await supabaseClient
                .from("utenti")
                .update({ username: looser, PP: elo2 })
                .eq("username", looser)
                .select();
            const { data: updatedRows3, error: error3 } = await supabaseClient
                .from("utenti")
                .update({ username: winner, PP: elo1 })
                .eq("username", winner)
                .select();
            if (error2 || error3) {
                throw error2 || error3;
            }
            if (updatedRows && updatedRows3) {
                res.status(200).send();
                return;
            }
        }
        catch (error) {
            console.error("Error:", error);
            res.status(500).send("Internal Server Error");
        }
    });
    app.get("/api/utenti", async (req, res) => {
        const { data, error } = await supabaseClient
            .from("utenti")
            .select("PP,username")
            .order("PP", { ascending: false });
        if (error)
            throw error;
        if (data) {
            res.status(200).send(data);
            return;
        }
        res.status(204).send();
        return;
    });
    app.get("/api/tornei", async (req, res) => {
        const { utente } = req.query;
        if (!utente) {
            res.status(502).send();
            return;
        }
        const { data, error } = await supabaseClient
            .from("tornei")
            .select("*")
            .eq("username", utente);
        if (error)
            throw error;
        if (data) {
            if (data.length == 0) {
                return res.status(204).send();
            }
            return res.status(200).send(data);
        }
        return res.status(404).send();
    });
    app.post("/api/tornei", async (req, res) => {
        const { UTENTI, nometorneo, orario } = req.body;
        const ora = new Date(orario);
        let ora2;
        const { data, error } = await supabaseClient
            .from("tornei")
            .select("*");
        if (error)
            throw error;
        data.map((x) => {
            if (x.nometorneo == nometorneo) {
                res.status(403).send("Tournament name already exists");
                return;
            }
            ora2 = new Date(x.date);
            if (ora2.getTime() - ora.getTime() <= 1000 * 60 * 120 &&
                ora2.getTime() - ora.getTime() > 0) {
                return res.status(403).send("Orario non disponibile a Povo!");
            }
        });
        UTENTI.map(async (x) => {
            console.log(x);
            const { data: updatedRows, error } = await supabaseClient
                .from("tornei")
                .insert({ username: x, nometorneo: nometorneo, date: orario })
                .select();
            if (error)
                console.error(error);
        });
        return res.status(200).send();
    });
    //API per prendere l'ICS
    app.get("/api/torneo", async (req, res) => {
        const { torneo } = req.query;
        const { data, error } = await supabaseClient
            .from("tornei")
            .select("*")
            .eq("nometorneo", torneo);
        if (error)
            throw error;
        if (data) {
            if (data.length == 0) {
                return res.status(404).send("Torneo non trovato");
            }
            let ora = new Date(data[0].date);
            const event = {
                start: [ora.getFullYear(), ora.getMonth(), ora.getDay(), ora.getMinutes(), ora.getSeconds()],
                duration: { hours: 2 },
                title: torneo,
                description: 'Il classico torneo di Povo ritorna!',
                location: '38123 Trento, Autonomous Province of Trento',
                status: 'CONFIRMED'
            };
            return res.status(200).send(event);
        }
    });
}
exports.default = initAPI;
