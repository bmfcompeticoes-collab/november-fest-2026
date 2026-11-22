/* =====================================================
   NOVEMBER FEST FUTSAL 2026
   SISTEMA DE GERENCIAMENTO COMPLETO
===================================================== */

const ADMIN_PASSWORD = "sccp1234$";
const STORAGE_KEY = "novemberFestCompleto2026";

/* =====================================================
   EQUIPES
===================================================== */

const teams = [
    { id: "falidos", name: "Falidos FC / Arceburgo - MG", group: "A", logo: "img/logo-falidos.png" },
    { id: "uniao", name: "União Futsal / Arceburgo - MG", group: "A", logo: "img/logo-uniao.png" },
    { id: "vikings", name: "Barb. Vikings / Arceburgo - MG", group: "A", logo: "img/logo-vikings.png" },
    { id: "p100", name: "P100 / Mococa - SP                    ", group: "B", logo: "img/logo-p100.png" },
    { id: "bao", name: "Bão di Goli / Vargem Grande do Sul - SP", group: "B", logo: "img/logo-baodigoli.png" },
    { id: "segel", name: "Segel Sport / Monte Santo de Minas - MG", group: "B", logo: "img/logo-segel.png" }
];

/* =====================================================
   ELENCOS PÚBLICOS — EDIÇÃO MANUAL
===================================================== */

/*
   CADASTRE OS JOGADORES E A COMISSÃO AQUI.

   Jogador:
   { number: 10, name: "Nome do jogador", position: "Ala" }

   Comissão:
   { name: "Nome do responsável", role: "Técnico" }

   Posições sugeridas:
   Goleiro, Fixo, Ala, Pivô.

   Para atualizar o site:
   1. Edite os nomes e números abaixo.
   2. Salve o arquivo.
   3. Publique novamente no Netlify.

   Não precisa usar o painel administrativo.
   Não precisa de banco de dados.
*/

const publicRosters = {

    falidos: {
        players: [
            // { number: 1, name: "Nome do jogador", position: "Goleiro" }
            { number: 0, name: "Otavio Costa da Silva", position: "" },
            { number: 0, name: "Alex Sander Rodrigues Freire", position: "" },
            { number: 0, name: "Marcelo Henrique Martini Gomes", position: "" },
            { number: 0, name: "João Vinicius Lourenço Gonçalves ", position: "" },
            { number: 0, name: "Leandro De Araujo Silva ", position: "" },
            { number: 0, name: "Wellington Donizete Alvez ", position: "" },
            { number: 0, name: "Luis Ricardo Silva Da Cruz ", position: "" },
            { number: 0, name: "Arthur Felix Costa ", position: "" },
            { number: 0, name: "Bruno Henrique Fernandes Marques", position: "" },
            { number: 0, name: "Luis Fernando Pafume Ferreira", position: "" },
            { number: 0, name: "Francis Marques Lozano", position: "" },
            { number: 0, name: "Alexandre Epifânio da Silva Júnior", position: "" },
            { number: 0, name: "Thayan fernandes mariano ", position: "" }

        ],
        staff: [
            // { name: "Nome do responsável", role: "Técnico" }
            {name:"Pablo De Souza Marques"},
            {name:"Edeval donizete marques"}

        ]
    },

    uniao: {
        players: [
            // { number: 1, name: "Nome do jogador", position: "Ala" }
            { number: 0, name: "VINICIO CEZAR NEVES ALMEIDA", position: "" },
            { number: 0, name: "JOSUE DE PAIVA IGNACIO", position: "" },
            { number: 0, name: "GUILHERME HENRIQUE S RIBEIRO", position: "" },
            { number: 0, name: "PAULO HENRIQUE DE MORAES SILVA", position: "" },
            { number: 0, name: "DANILO FERREIRA IORI", position: "" },
            { number: 0, name: "WESLLEY SILVA DE ASSUNÇÃO", position: "" },
            { number: 0, name: "TIAGO ROMBOLI SABINO", position: "" },
            { number: 0, name: "RUAN PELEGRINI LOPES DA CUNHA", position: "" },
            { number: 0, name: "CARLOS EDUARDO SILVA FERNANDES", position: "" },
            { number: 0, name: "FELIPE LEANDRO DO PRADO", position: "" },
            { number: 0, name: "LEONARDO FONSECA SILVA", position: "" },
            { number: 0, name: "GIOVANI AUGUSTO FURQUIM DA SILVA", position: "" },
            { number: 0, name: "MICHAEL DOUGLAS GOMES ALVES ", position: "" },
            { number: 0, name: "Kaique Assunção da Silva", position: "" },
            { number: 0, name: "MATEUS HENRIQUE DOS SANTOS SILVA", position: "" },
        ],
        staff: [
            { name: "TIAGO MACHADO FLÁVIO"},
            { name: "FELIPE LEANDRO DO PRADO"}
        ]
    },

    vikings: {
        players: [
            { number: 0, name: "Danilo José de Oliveira Trindade", position: "" },
            { number: 0, name: "Rafael Nunes Demetrio", position: "" },
            { number: 0, name: "Rafael de Oliveira", position: "" },
            { number: 0, name: "Gabriel Nunes Demetrio", position: "" },
            { number: 0, name: "Silas da Silva Mariano", position: "" },
            { number: 0, name: "Marlon Fernando de Paula Rodrigues", position: "" },
            { number: 0, name: "Thalles Bernardes Carvalho", position: "" },
            { number: 0, name: "Marcos Vinicius Aparecido dos Santos Oliveira", position: "" },
            { number: 0, name: "Alexsandro Lima de Araujo ", position: "" },
            { number: 0, name: "Bruno Henrique de Matos", position: "" },
            { number: 0, name: "Jonathan Damião Fernandes", position: "" },
            { number: 0, name: "Iago de Oliveira Musarra", position: "" },
            { number: 0, name: "Eduardo Henrique de Souza Costa", position: "" },
            { number: 0, name: "Samuel Silvestre", position: "" },
            { number: 0, name: "Carlos Henrique da Silva Santos", position: "" },
            { number: 0, name: "Elton Barbi Peruccelo", position: "" }
        ],
        staff: [
            {name:"Douglas Mello"},
            {name:"Elton"},
            {name:"Felipe Furlan"}
        ]
    },

    p100: {
        players: [
            { number: 0, name: "Matheus Araujo da Silva", position: "" },
            { number: 0, name: "Kayke Rodrigues da Silva", position: "" },
            { number: 0, name: "João Gbariel da Silva Garcia", position: "" },
            { number: 0, name: "Lucas Henrique Dias de Fatima", position: "" },
            { number: 0, name: "Gustavo Gramacho da Silva", position: "" },
            { number: 0, name: "Otavio Henrique Aguiar", position: "" },
            { number: 0, name: "Rykelme Gabriel Silva Costa", position: "" },
            { number: 0, name: "Pedro Henrique Bueno", position: "" },
            { number: 0, name: "Gabriel Lippi de Oliveira", position: "" },
            { number: 0, name: "Artur Eugênio Herculano", position: "" },
            { number: 0, name: "Rarley Gabriel Lozano de Almeida", position: "" },
            { number: 0, name: "Gabriel Henrique Cocentino", position: "" },
            { number: 0, name: "André Rinaldo Aguiar Junior", position: "" },
            { number: 0, name: "Thalisson Eduardo Cristiano Moraes", position: "" },
            { number: 0, name: "Carlos Augusto Santoni Leite", position: "" },
            { number: 0, name: "Matheus Augusto Scovini", position: "" },
            { number: 0, name: "Otavio do Carmo Pereira", position: "" },
            { number: 0, name: "Lucas Alves Rosseti", position: "" }
        ],
        staff: [
            {name:"Vinicius Felipe da Silva"},
            {name:"Luan Lopes da Silva"},
            {name:"André Rinaldo Aguiar"}
        ]
    },

    bao: {
        players: [
            { number: 0, name: "Kayque Otavio Idesti Linos", position: "" },
            { number: 0, name: "Wellington Silva dos Santos", position: "" },
            { number: 0, name: "Gabriel Cassiano Fernandes", position: "" },
            { number: 0, name: "David Schimidt de Moraes", position: "" },
            { number: 0, name: "João Victor Giacomussi da Costa", position: "" },
            { number: 0, name: "Guilherme Henrique da Silva Pinto", position: "" },
            { number: 0, name: "Leandro Milani da Silva", position: "" },
            { number: 0, name: "João Vitor Morais de Lima Costa", position: "" },
            { number: 0, name: "Mateus Luis dos Reis", position: "" },
            { number: 0, name: "Erik Gabriel Zucolau", position: "" },
            { number: 0, name: "João Vitor Fernandes Andrade", position: "" },
            { number: 0, name: "Vitor Henrique Pedro Barga", position: "" },
            { number: 0, name: "Dener Gabriel de Souza Leopoldo", position: "" },
            { number: 0, name: "Enzo Miguel Zucolau", position: "" },
            { number: 0, name: "Lucas Sales Araujo", position: "" },
            {number: 0, name: "Eduardo Henrique de Souza Oliveira Torres", position: ""},
            {number: 0, name: "Eduardo Valim Rodrigues", position: ""},
            {number: 0, name: "Breno Caixeta", position: ""}
        ],
        staff: [
            { name: "Everson Rogerio Linos"},
            { name: "Paulo Rodrigo Linos"}
        ]
    },

    segel: {
        players: [
            { number: 0, name: "Luis Fernando Uzai", position: "" },
            { number: 0, name: "Diego Henrique Lima", position: "" },
            { number: 0, name: "Lucas Ismael", position: "" },
            { number: 0, name: "Eduardo Alves", position: "" },
            { number: 0, name: "Marcos Vinicius", position: "" },
            { number: 0, name: "Israel Almeida", position: "" },
            { number: 0, name: "Bruno Otavio", position: "" },
            { number: 0, name: "Antonio Carlos", position: "" },
            { number: 0, name: "Lorenzo Teodoro", position: "" },
            { number: 0, name: "Ryan Teodoro", position: "" },
            { number: 0, name: "Cassio Roberto", position: "" },
            { number: 0, name: "Marcos Vinicius Lima", position: "" }
        ],
        staff: [
            {name:"Luis Fernando"},
            {name:"Carlos Perloti"},
            {name:"Andre Luis"}
        ]
    }

};

/* =====================================================
   CALENDÁRIO
===================================================== */

const matches = [
    { id: "f1", date: "10/11/2026", time: "19:45", home: "falidos", away: "p100", phase: "fase" },
    { id: "f2", date: "10/11/2026", time: "20:30", home: "uniao", away: "bao", phase: "fase" },

    { id: "f3", date: "12/11/2026", time: "19:45", home: "falidos", away: "segel", phase: "fase" },
    { id: "f4", date: "12/11/2026", time: "21:15", home: "vikings", away: "bao", phase: "fase" },

    { id: "f5", date: "17/11/2026", time: "19:45", home: "vikings", away: "p100", phase: "fase" },
    { id: "f6", date: "17/11/2026", time: "20:30", home: "uniao", away: "segel", phase: "fase" },

    { id: "f7", date: "19/11/2026", time: "19:45", home: "uniao", away: "p100", phase: "fase" },
    { id: "f8", date: "19/11/2026", time: "20:30", home: "falidos", away: "bao", phase: "fase" },
    { id: "f9", date: "19/11/2026", time: "21:15", home: "vikings", away: "segel", phase: "fase" },

    { id: "jg1", date: "24/11/2026", time: "19:45", phase: "semiB", knockout: true },
    { id: "jg2", date: "24/11/2026", time: "20:30", phase: "semiB", knockout: true },

    { id: "jg3", date: "26/11/2026", time: "19:45", phase: "semiA", knockout: true },
    { id: "jg4", date: "26/11/2026", time: "20:30", phase: "semiA", knockout: true },

    { id: "final", date: "01/12/2026", time: "20:00", phase: "final", knockout: true }
];

/* =====================================================
   DADOS DO CAMPEONATO
===================================================== */

function emptyData() {
    return {
        people: [],
        results: {},
        events: []
    };
}

function loadData() {
    try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));

        if (!saved || typeof saved !== "object") {
            return emptyData();
        }

        return {
            people: Array.isArray(saved.people) ? saved.people : [],
            results: saved.results && typeof saved.results === "object" ? saved.results : {},
            events: Array.isArray(saved.events) ? saved.events : []
        };

    } catch (error) {
        console.error("Erro ao carregar dados:", error);
        return emptyData();
    }
}

let data = loadData();

function saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

/* =====================================================
   ATUALIZAÇÃO MANUAL — 1ª RODADA
   FALIDOS FC 6 X 2 P100
===================================================== */

function applyRoundOneFalidosP100() {

    const updateKey = "novemberFest2026_rodada1_falidos_p100_aplicada_v2";

    if (localStorage.getItem(updateKey) === "true") return;

    const scorers = [
        {
            team: "falidos",
            name: "Alexsander Rodrigues Freire",
            nickname: "Gabiru",
            goals: 2
        },
        {
            team: "falidos",
            name: "Leandro Araujo Silva",
            nickname: "Lê Roxo",
            goals: 1
        },
        {
            team: "falidos",
            name: "Bruno Henrique Fernandes",
            nickname: "Bruninho",
            goals: 3
        },
        {
            team: "p100",
            name: "Andre Rinaldo Aguiar Junior",
            nickname: "Alemão",
            goals: 1
        },
        {
            team: "p100",
            name: "Otavio Henrique Aguiar",
            nickname: "",
            goals: 1
        }
    ];
        function normalizeName(value) {
        return String(value || "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .replace(/[^a-z0-9]/g, "");
    }

    scorers.forEach(scorer => {

        const normalized = normalizeName(scorer.name);

        const ignoredNameParts = ["de", "da", "do", "das", "dos", "e"];

        const scorerParts = String(scorer.name)
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .split(/[^a-z0-9]+/)
            .filter(part => part && !ignoredNameParts.includes(part));

        let person = data.people.find(item => {

            if (item.team !== scorer.team) return false;

            const existingName = normalizeName(item.name);

            if (
                existingName === normalized ||
                existingName.startsWith(normalized)
            ) {
                return true;
            }

            const existingParts = String(item.name || "")
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .split(/[^a-z0-9]+/)
                .filter(part => part && !ignoredNameParts.includes(part));

            return scorerParts.every(part =>
                existingParts.includes(part)
            );
        });

        if (!person) {

            person = {
                id: crypto.randomUUID(),
                name: scorer.name,
                team: scorer.team,
                category: "player",
                number: "",
                role: "",
                nickname: scorer.nickname
            };

            data.people.push(person);

        } else if (scorer.nickname) {

            person.nickname = scorer.nickname;

        }

        scorer.personId = person.id;

    });

    // Define o placar oficial da partida.
    data.results.f1 = {
        homeGoals: 6,
        awayGoals: 2,
        winner: null
    };

    // Evita duplicar gols anteriores dessa partida.
    data.events = data.events.filter(event =>
        !(event.matchId === "f1" && event.type === "goal")
    );

    // Lança os oito gols individualmente.
    scorers.forEach(scorer => {

        for (let i = 0; i < scorer.goals; i++) {

            data.events.push({
                id: `manual-f1-goal-${scorer.team}-${normalizeName(scorer.name)}-${i + 1}`,
                matchId: "f1",
                teamId: scorer.team,
                personId: scorer.personId,
                type: "goal",
                minute: "",
                note: scorer.nickname
                    ? `Apelido: ${scorer.nickname}`
                    : "",
                createdAt: new Date().toISOString()
            });

        }

    });

    saveData();

    localStorage.setItem(updateKey, "true");

}

// Executa a atualização da primeira rodada.
applyRoundOneFalidosP100();

/* =====================================================
   FUNÇÕES AUXILIARES
===================================================== */

function $(id) {
    return document.getElementById(id);
}

function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    })[char]);
}

function getTeam(id) {
    return teams.find(team => team.id === id);
}

function getTeamName(id) {
    return getTeam(id)?.name || "A definir";
}

function getPerson(id) {
    return data.people.find(person => person.id === id);
}

function getPersonName(id) {
    return getPerson(id)?.name || "Pessoa não cadastrada";
}

function getMatch(id) {
    return matches.find(match => match.id === id);
}

function getPhaseName(phase) {
    return {
        fase: "PRIMEIRA FASE",
        semiB: "SEMIFINAIS B",
        semiA: "SEMIFINAIS A",
        final: "GRANDE FINAL"
    }[phase] || "CAMPEONATO";
}

function getScore(matchId) {
    return data.results[matchId] || {
        homeGoals: null,
        awayGoals: null,
        winner: null
    };
}

function hasResult(matchId) {
    const result = getScore(matchId);

    return result.homeGoals !== null &&
           result.awayGoals !== null &&
           result.homeGoals !== undefined &&
           result.awayGoals !== undefined;
}

function getEvents(matchId) {
    return data.events.filter(event => event.matchId === matchId);
}

function getPersonEvents(personId) {
    return data.events.filter(event => event.personId === personId);
}

function getEventLabel(type) {
    return {
        goal: "Gol",
        yellow: "Cartão amarelo",
        red: "Cartão vermelho",
        suspension: "Suspensão"
    }[type] || type;
}

function getEventIcon(type) {
    return {
        goal: "⚽",
        yellow: "🟨",
        red: "🟥",
        suspension: "🛑"
    }[type] || "•";
}

function getEventClass(type) {
    return {
        goal: "tag-goal",
        yellow: "tag-yellow",
        red: "tag-red",
        suspension: "tag-suspension"
    }[type] || "";
}

/* =====================================================
   CLASSIFICAÇÃO
===================================================== */

function calculateStandings(group) {

    const standings = teams
        .filter(team => team.group === group)
        .map(team => ({
            id: team.id,
            name: team.name,
            pts: 0,
            played: 0,
            wins: 0,
            draws: 0,
            losses: 0,
            gf: 0,
            ga: 0,
            sg: 0
        }));

    matches
        .filter(match => match.phase === "fase")
        .forEach(match => {

            if (!hasResult(match.id)) return;

            const result = getScore(match.id);
            const hg = Number(result.homeGoals);
            const ag = Number(result.awayGoals);

            const home = standings.find(team => team.id === match.home);
            const away = standings.find(team => team.id === match.away);

            if (home) {
                home.played++;
                home.gf += hg;
                home.ga += ag;

                if (hg > ag) {
                    home.wins++;
                    home.pts += 3;
                } else if (hg < ag) {
                    home.losses++;
                } else {
                    home.draws++;
                    home.pts += 2; 
                }
            }

            if (away) {
                away.played++;
                away.gf += ag;
                away.ga += hg;

                if (ag > hg) {
                    away.wins++;
                    away.pts += 3;
                } else if (ag < hg) {
                    away.losses++;
                } else {
                    away.draws++;
                    away.pts += 2;
                }
            }
        });

    standings.forEach(team => {
        team.sg = team.gf - team.ga;
    });

    standings.sort((a, b) =>
        b.pts - a.pts ||
        b.wins - a.wins ||
        b.sg - a.sg ||
        b.gf - a.gf ||
        a.name.localeCompare(b.name)
    );

    return standings;
}

function renderStandings(group, elementId) {

    const tbody = $(elementId);
    if (!tbody) return;

    const standings = calculateStandings(group);

    tbody.innerHTML = standings.map((team, index) => `

        <tr>
            <td>${index + 1}º</td>
            <td>${escapeHTML(team.name)}</td>
            <td><strong>${team.pts}</strong></td>
            <td>${team.played}</td>
            <td>${team.wins}</td>
            <td>${team.draws}</td>
            <td>${team.losses}</td>
            <td>${team.sg > 0 ? "+" : ""}${team.sg}</td>
        </tr>

    `).join("");
}
/* =====================================================
   MATA-MATA
===================================================== */

function getKnockoutTeams(matchId) {

    const A = calculateStandings("A");
    const B = calculateStandings("B");

    if (matchId === "jg1") {
        return {
            home: B[1]?.id || null,
            away: B[2]?.id || null
        };
    }

    if (matchId === "jg2") {
        return {
            home: A[1]?.id || null,
            away: A[2]?.id || null
        };
    }

    if (matchId === "jg3") {
        return {
            home: B[0]?.id || null,
            away: getKnockoutWinner("jg1")
        };
    }

    if (matchId === "jg4") {
        return {
            home: A[0]?.id || null,
            away: getKnockoutWinner("jg2")
        };
    }

    if (matchId === "final") {
        return {
            home: getKnockoutWinner("jg3"),
            away: getKnockoutWinner("jg4")
        };
    }

    return { home: null, away: null };
}

function getPlayoffTeams(matchId) {
    return getKnockoutTeams(matchId);
}

function getKnockoutWinner(matchId) {

    const match = getMatch(matchId);

    if (!match || !match.knockout || !hasResult(matchId)) {
        return null;
    }

    const teamsPlaying = getKnockoutTeamsWithoutWinner(matchId);

    if (!teamsPlaying.home || !teamsPlaying.away) return null;

    const result = getScore(matchId);

    const hg = Number(result.homeGoals);
    const ag = Number(result.awayGoals);

    if (hg > ag) return teamsPlaying.home;
    if (ag > hg) return teamsPlaying.away;

    if (match.phase === "semiA") {
        return teamsPlaying.home;
    }

    return result.winner || null;
}

function getKnockoutTeamsWithoutWinner(matchId) {

    const A = calculateStandings("A");
    const B = calculateStandings("B");

    switch (matchId) {

        case "jg1":
            return {
                home: B[1]?.id || null,
                away: B[2]?.id || null
            };

        case "jg2":
            return {
                home: A[1]?.id || null,
                away: A[2]?.id || null
            };

        case "jg3":
            return {
                home: B[0]?.id || null,
                away: getKnockoutWinner("jg1")
            };

        case "jg4":
            return {
                home: A[0]?.id || null,
                away: getKnockoutWinner("jg2")
            };

        case "final":
            return {
                home: getKnockoutWinner("jg3"),
                away: getKnockoutWinner("jg4")
            };

        default:
            return { home: null, away: null };
    }
}

function getMatchTeams(match) {

    if (!match.knockout) {
        return {
            home: match.home,
            away: match.away
        };
    }

    return getKnockoutTeams(match.id);
}

/* =====================================================
   EQUIPES PÚBLICAS — ELENCOS MANUAIS
===================================================== */

function renderTeams() {

    const container = $("teamsGrid");
    if (!container) return;

    container.innerHTML = teams.map(team => {

        const roster = publicRosters[team.id] || {
            players: [],
            staff: []
        };

        const players = [...roster.players].sort((a, b) =>
            Number(a.number || 0) - Number(b.number || 0)
        );

        const staff = roster.staff || [];

        const playersHTML = players.length
            ? players.map(player => `
                <div class="public-player">
                    <strong class="player-number">
                        ${escapeHTML(player.number)}
                    </strong>

                    <div class="player-info">
                        <strong>${escapeHTML(player.name)}</strong>
                        <small>${escapeHTML(player.position || "Não informado")}</small>
                    </div>
                </div>
            `).join("")
            : `<p class="roster-empty">Elenco ainda não divulgado.</p>`;

        const staffHTML = staff.length
            ? staff.map(person => `
                <div class="public-staff">
                    <strong>${escapeHTML(person.name)}</strong>
                    <small>${escapeHTML(person.role || "Comissão técnica")}</small>
                </div>
            `).join("")
            : `<p class="roster-empty">Comissão técnica ainda não divulgada.</p>`;

        return `
            <div class="team-card">

                <h3>${escapeHTML(team.name)}</h3>

                <p class="team-group">GRUPO ${team.group}</p>

                <div class="team-roster-count">
                    <span>⚽ ${players.length} jogadores</span>
                    <span>👥 ${staff.length} comissão</span>
                </div>

                <details class="public-roster">

                    <summary>VER ELENCO</summary>

                    <div class="roster-content">

                        <h4>JOGADORES</h4>

                        <div class="public-players-list">
                            ${playersHTML}
                        </div>

                        <div class="roster-divider"></div>

                        <h4>COMISSÃO TÉCNICA</h4>

                        <div class="public-staff-list">
                            ${staffHTML}
                        </div>

                    </div>

                </details>

            </div>
        `;

    }).join("");
}

/* =====================================================
   TABELA DE JOGOS
===================================================== */

function renderMatches(filter = "todos") {

    const container = $("matchesGrid");
    if (!container) return;

    const filtered = matches.filter(match =>
        filter === "todos" || match.phase === filter
    );

    container.innerHTML = filtered.map(match => {

        const playing = getMatchTeams(match);
        const result = getScore(match.id);
        const played = hasResult(match.id);

        return `
            <div class="match-card">

                <h3>${getPhaseName(match.phase)}</h3>

                <div class="match-date">
                    📅 ${match.date} | ⏰ ${match.time}
                </div>

                <div class="match-teams">

                    <strong>${escapeHTML(getTeamName(playing.home))}</strong>

                    <div class="match-score">
                        ${played
                            ? `${result.homeGoals} X ${result.awayGoals}`
                            : "VS"}
                    </div>

                    <strong>${escapeHTML(getTeamName(playing.away))}</strong>

                </div>

                <small class="match-status">
                    ${played ? "RESULTADO LANÇADO" : "AGUARDANDO JOGO"}
                </small>

            </div>
        `;

    }).join("");
}

/* FILTROS */

document.querySelectorAll(".filter").forEach(button => {

    button.addEventListener("click", () => {

        document.querySelectorAll(".filter").forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        renderMatches(button.dataset.filter);

    });

});

/* =====================================================
   CHAVEAMENTO
===================================================== */

function renderBracket() {

    const container = $("bracket");
    if (!container) return;

    const rounds = [
        { title: "SEMIFINAIS B", ids: ["jg1", "jg2"] },
        { title: "SEMIFINAIS A", ids: ["jg3", "jg4"] },
        { title: "GRANDE FINAL", ids: ["final"] }
    ];

    container.innerHTML = rounds.map(round => `

        <div class="bracket-round">

            <h3>${round.title}</h3>

            ${round.ids.map(id => {

                const match = getMatch(id);
                const playing = getMatchTeams(match);
                const result = getScore(id);
                const played = hasResult(id);

                return `
                    <div class="bracket-match">

                        <small>${match.date} • ${match.time}</small>

                        <p>${escapeHTML(getTeamName(playing.home))}</p>

                        <strong>
                            ${played
                                ? `${result.homeGoals} X ${result.awayGoals}`
                                : "VS"}
                        </strong>

                        <p>${escapeHTML(getTeamName(playing.away))}</p>

                    </div>
                `;

            }).join("")}

        </div>

    `).join("");
}
/* =====================================================
   CADASTRO DE PESSOAS
===================================================== */

function renderTeamSelects() {

    const options = teams.map(team => `
        <option value="${team.id}">
            ${escapeHTML(team.name)}
        </option>
    `).join("");

    if ($("personTeam")) {
        $("personTeam").innerHTML = options;
    }

    if ($("rosterTeamFilter")) {
        $("rosterTeamFilter").innerHTML =
            `<option value="all">Todas as equipes</option>` + options;
    }

    if ($("eventTeam")) {
        $("eventTeam").innerHTML =
            `<option value="">Selecione a equipe</option>` + options;
    }
}

function resetPersonForm() {

    $("personForm").reset();
    $("personId").value = "";

    $("personSubmit").textContent = "CADASTRAR PESSOA";

    $("cancelEdit").classList.add("hidden");

    $("personCategory").value = "player";
    updateNumberField();
}

function updateNumberField() {

    const isPlayer = $("personCategory").value === "player";

    $("personNumber").disabled = !isPlayer;

    if (!isPlayer) {
        $("personNumber").value = "";
    }
}

$("personCategory").addEventListener("change", updateNumberField);

/* =====================================================
   ATUALIZAÇÃO MANUAL — UNIÃO FUTSAL 3 X 5 BÃO DI GOLI
===================================================== */

function applyMatchF2UniaoBao() {
    const updateKey = "novemberFest2026_f2_uniao_bao_aplicada_v2";

    if (localStorage.getItem(updateKey) === "true") return;

    function normalizeName(value) {
        return String(value || "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .replace(/[^a-z0-9]/g, "");
    }

    function getOrCreatePlayer(team, rosterName, nickname = "") {
        const normalized = normalizeName(rosterName);

        let person = data.people.find(item =>
            item.team === team &&
            item.category === "player" &&
            normalizeName(item.name) === normalized
        );

        if (!person) {
            person = {
                id: crypto.randomUUID(),
                name: rosterName,
                team,
                category: "player",
                number: "",
                role: "",
                nickname
            };
            data.people.push(person);
        } else if (nickname) {
            person.nickname = nickname;
        }

        return person;
    }

    // Resultado oficial: União Futsal 3 x 5 Bão di Goli.
    data.results.f2 = {
        homeGoals: 3,
        awayGoals: 5,
        winner: null
    };

    data.events = data.events.filter(event =>
        !String(event.id || "").startsWith("manual-f2-")
    );

    const scorers = [
        {
            team: "uniao",
            rosterName: "VINICIO CEZAR NEVES ALMEIDA",
            nickname: "",
            goals: 1
        },
        {
            team: "uniao",
            rosterName: "JOSUE DE PAIVA IGNACIO",
            nickname: "",
            goals: 1
        },
        {
            team: "uniao",
            rosterName: "TIAGO ROMBOLI SABINO",
            nickname: "Tiaguinho",
            goals: 1
        },
        {
            team: "bao",
            rosterName: "Wellington Silva dos Santos",
            nickname: "Bieto",
            goals: 2
        },
        {
            team: "bao",
            rosterName: "Guilherme Henrique da Silva Pinto",
            nickname: "Guilherme Silva",
            goals: 2
        },
        {
            team: "bao",
            rosterName: "Eduardo Henrique de Souza Oliveira Torres",
            nickname: "Duzão",
            goals: 1
        }
    ];

    scorers.forEach(scorer => {
        const person = getOrCreatePlayer(
            scorer.team,
            scorer.rosterName,
            scorer.nickname
        );

        for (let i = 1; i <= scorer.goals; i++) {
            data.events.push({
                id: `manual-f2-goal-${scorer.team}-${normalizeName(scorer.rosterName)}-${i}`,
                matchId: "f2",
                teamId: scorer.team,
                personId: person.id,
                type: "goal",
                minute: "",
                note: scorer.nickname ? `Apelido: ${scorer.nickname}` : "",
                createdAt: new Date().toISOString()
            });
        }
    });

    const yellowCards = [
        { rosterName: "JOSUE DE PAIVA IGNACIO", nickname: "" },
        { rosterName: "GUILHERME HENRIQUE S RIBEIRO", nickname: "" },
        { rosterName: "PAULO HENRIQUE DE MORAES SILVA", nickname: "" },
        { rosterName: "DANILO FERREIRA IORI", nickname: "Bala" },
        { rosterName: "GIOVANI AUGUSTO FURQUIM DA SILVA", nickname: "Gi" }
    ];

    yellowCards.forEach((card, index) => {
        const person = getOrCreatePlayer(
            "uniao",
            card.rosterName,
            card.nickname
        );

        data.events.push({
            id: `manual-f2-yellow-uniao-${index + 1}`,
            matchId: "f2",
            teamId: "uniao",
            personId: person.id,
            type: "yellow",
            minute: "",
            note: card.nickname ? `Apelido: ${card.nickname}` : "",
            createdAt: new Date().toISOString()
        });
    });

    // Cartão amarelo da comissão técnica do Bão di Goli.
    const staffName = "Paulo Rodrigo Linos";
    const normalizedStaffName = normalizeName(staffName);

    let staffPerson = data.people.find(person =>
        person.team === "bao" &&
        person.category === "staff" &&
        normalizeName(person.name) === normalizedStaffName
    );

    if (!staffPerson) {
        staffPerson = {
            id: crypto.randomUUID(),
            name: staffName,
            team: "bao",
            category: "staff",
            number: "",
            role: "Comissão técnica"
        };
        data.people.push(staffPerson);
    }

    const alreadyHasBaoYellow = data.events.some(event =>
        event.matchId === "f2" &&
        event.teamId === "bao" &&
        event.personId === staffPerson.id &&
        event.type === "yellow"
    );

    if (!alreadyHasBaoYellow) {
        data.events.push({
            id: "manual-f2-yellow-bao-paulo-rodrigo-linos",
            matchId: "f2",
            teamId: "bao",
            personId: staffPerson.id,
            type: "yellow",
            minute: "",
            note: "Cartão amarelo — comissão técnica",
            createdAt: new Date().toISOString()
        });
    }

    saveData();
    localStorage.setItem(updateKey, "true");
}

// Aplica o resultado e as estatísticas da partida União x Bão di Goli.
applyMatchF2UniaoBao();


/* =====================================================
   ATUALIZAÇÃO MANUAL — JOGOS DO DIA 12/11/2026
   FALIDOS FC 4 X 3 SEGEL SPORT
   VIKINGS FUTSAL 2 X 2 BÃO DI GOLI
===================================================== */

function applyMatchesNovember12() {
    const updateKey = "novemberFest2026_jogos_dia12_aplicados_v1";
    if (localStorage.getItem(updateKey) === "true") return;

    function normalizeName(value) {
        return String(value || "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .replace(/[^a-z0-9]/g, "");
    }

    function nameParts(value) {
        const ignored = ["de", "da", "do", "das", "dos", "e"];
        return String(value || "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .split(/[^a-z0-9]+/)
            .filter(part => part && !ignored.includes(part));
    }

    function getOrCreatePlayer(team, name, nickname = "") {
        const normalized = normalizeName(name);
        const parts = nameParts(name);

        let person = data.people.find(item => {
            if (item.team !== team || item.category !== "player") return false;

            const existing = normalizeName(item.name);
            const existingParts = nameParts(item.name);

            return existing === normalized ||
                existing.includes(normalized) ||
                normalized.includes(existing) ||
                parts.every(part => existingParts.includes(part));
        });

        if (!person) {
            person = {
                id: crypto.randomUUID(),
                name,
                team,
                category: "player",
                number: "",
                role: "",
                nickname
            };
            data.people.push(person);
        } else if (nickname && !person.nickname) {
            person.nickname = nickname;
        }

        return person;
    }

    function getOrCreateStaff(team, name) {
        const normalized = normalizeName(name);

        let person = data.people.find(item => {
            if (item.team !== team || item.category !== "staff") return false;
            const existing = normalizeName(item.name);
            return existing === normalized ||
                existing.includes(normalized) ||
                normalized.includes(existing);
        });

        if (!person) {
            person = {
                id: crypto.randomUUID(),
                name,
                team,
                category: "staff",
                number: "",
                role: "Comissão técnica"
            };
            data.people.push(person);
        }

        return person;
    }

    function addGoals(matchId, team, scorers) {
        scorers.forEach(scorer => {
            const person = getOrCreatePlayer(team, scorer.name, scorer.nickname || "");
            for (let i = 1; i <= scorer.goals; i++) {
                data.events.push({
                    id: `manual-${matchId}-goal-${team}-${normalizeName(scorer.name)}-${i}`,
                    matchId,
                    teamId: team,
                    personId: person.id,
                    type: "goal",
                    minute: "",
                    note: scorer.nickname ? `Apelido: ${scorer.nickname}` : "",
                    createdAt: new Date().toISOString()
                });
            }
        });
    }

    function addYellow(matchId, team, name, category = "player", note = "") {
        const person = category === "staff"
            ? getOrCreateStaff(team, name)
            : getOrCreatePlayer(team, name);

        data.events.push({
            id: `manual-${matchId}-yellow-${team}-${normalizeName(name)}`,
            matchId,
            teamId: team,
            personId: person.id,
            type: "yellow",
            minute: "",
            note,
            createdAt: new Date().toISOString()
        });
    }

    // Remove somente lançamentos manuais destes dois jogos,
    // evitando duplicidade caso a atualização seja refeita.
    data.events = data.events.filter(event =>
        !String(event.id || "").startsWith("manual-f3-") &&
        !String(event.id || "").startsWith("manual-f4-")
    );

    // Jogo 1 — Falidos FC 4 x 3 Segel Sport.
    data.results.f3 = {
        homeGoals: 4,
        awayGoals: 3,
        winner: null
    };

    addGoals("f3", "falidos", [
        {
            name: "Bruno Henrique Fernandes Marques",
            nickname: "Bruninho",
            goals: 3
        },
        {
            name: "Luis Fernando Pafume Ferreira",
            nickname: "Veinho",
            goals: 1
        }
    ]);

    addGoals("f3", "segel", [
        {
            name: "Israel Almeida",
            nickname: "",
            goals: 3
        }
    ]);

    addYellow("f3", "falidos", "Luis Ricardo Silva da Cruz");
    addYellow("f3", "segel", "Antonio Carlos");

    // Jogo 2 — Vikings Futsal 2 x 2 Bão di Goli.
    data.results.f4 = {
        homeGoals: 2,
        awayGoals: 2,
        winner: null
    };

    addGoals("f4", "vikings", [
        {
            name: "Rafael de Oliveira",
            nickname: "",
            goals: 1
        },
        {
            name: "Samuel Silvestre",
            nickname: "",
            goals: 1
        }
    ]);

    addGoals("f4", "bao", [
        {
            name: "Guilherme Henrique da Silva Pinto",
            nickname: "Guilherme Silva",
            goals: 1
        },
        {
            name: "Lucas Sales Araujo",
            nickname: "Lucas Sales",
            goals: 1
        }
    ]);

    // Iago está cadastrado no elenco do Vikings Futsal.
    addYellow("f4", "vikings", "Iago de Oliveira Musarra");

    addYellow("f4", "bao", "Kayque Otavio Idesti Linos", "player", "Nome informado: Kayque Linos");

    // "Rodrigo Linos" corresponde ao integrante da comissão
    // cadastrado no elenco como Paulo Rodrigo Linos.
    addYellow("f4", "bao", "Paulo Rodrigo Linos", "staff", "Nome informado: Rodrigo Linos");

    saveData();
    localStorage.setItem(updateKey, "true");
}

// Aplica os resultados e as estatísticas dos jogos de 12/11.
applyMatchesNovember12();

/* =====================================================
   ATUALIZAÇÃO MANUAL — JOGOS DO DIA 17/11/2026

   VIKINGS 2 X 3 P100
   UNIÃO FUTSAL 1 X 1 SEGEL SPORT
===================================================== */

function applyMatchesNovember17() {

    const updateKey = "novemberFest2026_jogos_dia17_aplicados_v1";

    if (localStorage.getItem(updateKey) === "true") return;

    function normalizeName(value) {
        return String(value || "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .replace(/[^a-z0-9]/g, "");
    }

    // Localiza ou cadastra jogador/comissão.
    function getOrCreatePerson(team, name, category = "player") {

        const normalized = normalizeName(name);

        let person = data.people.find(item =>
            item.team === team &&
            item.category === category &&
            normalizeName(item.name) === normalized
        );

        if (!person) {
            person = {
                id: crypto.randomUUID(),
                name: name,
                team: team,
                category: category,
                number: "",
                role: category === "staff" ? "Comissão técnica" : ""
            };

            data.people.push(person);
        }

        return person;
    }

    // Registra os gols individualmente.
    function addGoals(matchId, team, scorers) {

        scorers.forEach(scorer => {

            const person = getOrCreatePerson(
                team,
                scorer.name,
                "player"
            );

            for (let i = 1; i <= scorer.goals; i++) {

                data.events.push({
                    id: `manual-${matchId}-goal-${team}-${normalizeName(scorer.name)}-${i}`,
                    matchId: matchId,
                    teamId: team,
                    personId: person.id,
                    type: "goal",
                    minute: "",
                    note: "",
                    createdAt: new Date().toISOString()
                });

            }

        });

    }

    // Registra cartões amarelos.
    function addYellow(matchId, team, name, category = "player") {

        const person = getOrCreatePerson(
            team,
            name,
            category
        );

        data.events.push({
            id: `manual-${matchId}-yellow-${team}-${normalizeName(name)}`,
            matchId: matchId,
            teamId: team,
            personId: person.id,
            type: "yellow",
            minute: "",
            note: category === "staff"
                ? "Cartão amarelo — comissão técnica"
                : "",
            createdAt: new Date().toISOString()
        });

    }

    // Remove somente os lançamentos manuais destes jogos.
    // Preserva todos os registros das rodadas anteriores.
    data.events = data.events.filter(event =>
        !String(event.id || "").startsWith("manual-f5-") &&
        !String(event.id || "").startsWith("manual-f6-")
    );

    /* =================================================
       JOGO 1 — VIKINGS 2 X 3 P100
    ================================================= */

    data.results.f5 = {
        homeGoals: 2,
        awayGoals: 3,
        winner: null
    };

    // Gols do Vikings.
    addGoals("f5", "vikings", [
        {
            name: "Samuel Silvestre",
            goals: 1
        },
        {
            name: "Danilo José de Oliveira Trindade",
            goals: 1
        }
    ]);

    // Gols do P100.
    addGoals("f5", "p100", [
        {
            name: "Gustavo Gramacho da Silva",
            goals: 2
        },
        {
            name: "Otavio Henrique Aguiar",
            goals: 1
        }
    ]);

    // Cartões amarelos do P100.
    addYellow(
        "f5",
        "p100",
        "Thalisson Eduardo Cristiano Moraes"
    );

    addYellow(
        "f5",
        "p100",
        "André Rinaldo Aguiar Junior"
    );

    // Vikings não recebeu cartões amarelos.

    /* =================================================
       JOGO 2 — UNIÃO FUTSAL 1 X 1 SEGEL SPORT
    ================================================= */

    data.results.f6 = {
        homeGoals: 1,
        awayGoals: 1,
        winner: null
    };

    // Gol do União Futsal.
    addGoals("f6", "uniao", [
        {
            name: "JOSUE DE PAIVA IGNACIO",
            goals: 1
        }
    ]);

    // Gol do Segel Sport.
    addGoals("f6", "segel", [
        {
            name: "Israel Almeida",
            goals: 1
        }
    ]);

    // Cartão amarelo do União.
    addYellow(
        "f6",
        "uniao",
        "DANILO FERREIRA IORI"
    );

    // Cartões amarelos do Segel Sport.
    addYellow(
        "f6",
        "segel",
        "Antonio Carlos",
        "player"
    );

    addYellow(
        "f6",
        "segel",
        "Luis Fernando",
        "staff"
    );

    addYellow(
        "f6",
        "segel",
        "Andre Luis",
        "staff"
    );

    // Salva resultados e ocorrências.
    saveData();

    localStorage.setItem(updateKey, "true");

}

// Executa a atualização dos jogos de 17/11.
applyMatchesNovember17();


/* =====================================================
   ATUALIZAÇÃO MANUAL — JOGOS DO DIA 19/11/2026

   UNIÃO MOTOS FUTSAL 2 X 5 P100
   FALIDOS 0 X 5 BÃO DI GOLI
   VIKINGS FUTSAL 2 X 1 SEGEL SPORT
===================================================== */

function applyMatchesNovember19() {
    const updateKey = "novemberFest2026_jogos_dia19_aplicados_v1";

    if (localStorage.getItem(updateKey) === "true") return;

    function normalizeName(value) {
        return String(value || "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .replace(/[^a-z0-9]/g, "");
    }

    function getOrCreatePerson(team, name, category = "player") {
        const normalized = normalizeName(name);

        let person = data.people.find(item =>
            item.team === team &&
            item.category === category &&
            normalizeName(item.name) === normalized
        );

        if (!person) {
            person = {
                id: crypto.randomUUID(),
                name,
                team,
                category,
                number: "",
                role: category === "staff" ? "Comissão técnica" : ""
            };
            data.people.push(person);
        }

        return person;
    }

    function addGoals(matchId, team, scorers) {
        scorers.forEach(scorer => {
            const person = getOrCreatePerson(team, scorer.name, "player");

            for (let i = 1; i <= scorer.goals; i++) {
                data.events.push({
                    id: `manual-${matchId}-goal-${team}-${normalizeName(scorer.name)}-${i}`,
                    matchId,
                    teamId: team,
                    personId: person.id,
                    type: "goal",
                    minute: "",
                    note: "",
                    createdAt: new Date().toISOString()
                });
            }
        });
    }

    function addYellow(matchId, team, name, category = "player") {
        const person = getOrCreatePerson(team, name, category);

        data.events.push({
            id: `manual-${matchId}-yellow-${team}-${normalizeName(name)}`,
            matchId,
            teamId: team,
            personId: person.id,
            type: "yellow",
            minute: "",
            note: category === "staff"
                ? "Cartão amarelo — comissão técnica"
                : "",
            createdAt: new Date().toISOString()
        });
    }

    // Remove registros manuais anteriores destes três jogos.
    data.events = data.events.filter(event =>
        !String(event.id || "").startsWith("manual-f7-") &&
        !String(event.id || "").startsWith("manual-f8-") &&
        !String(event.id || "").startsWith("manual-f9-")
    );

    // JOGO 1 — UNIÃO MOTOS FUTSAL 2 X 5 P100.
    data.results.f7 = {
        homeGoals: 2,
        awayGoals: 5,
        winner: null
    };

    addGoals("f7", "uniao", [
        { name: "VINICIO CEZAR NEVES ALMEIDA", goals: 1 },
        { name: "FELIPE LEANDRO DO PRADO", goals: 1 }
    ]);

    addGoals("f7", "p100", [
        { name: "Gustavo Gramacho da Silva", goals: 2 },
        { name: "Otavio Henrique Aguiar", goals: 1 },
        { name: "Thalisson Eduardo Cristiano Moraes", goals: 1 },
        { name: "Rykelme Gabriel Silva Costa", goals: 1 }
    ]);

    addYellow("f7", "uniao", "FELIPE LEANDRO DO PRADO");
    addYellow("f7", "p100", "Otavio do Carmo Pereira");

    // JOGO 2 — FALIDOS 0 X 5 BÃO DI GOLI.
    data.results.f8 = {
        homeGoals: 0,
        awayGoals: 5,
        winner: null
    };

    addGoals("f8", "bao", [
        { name: "David Schimidt de Moraes", goals: 1 },
        { name: "Wellington Silva dos Santos", goals: 1 },
        { name: "Guilherme Henrique da Silva Pinto", goals: 1 },
        { name: "Eduardo Henrique de Souza Oliveira Torres", goals: 1 },
        { name: "Leandro Milani da Silva", goals: 1 }
    ]);

    addYellow("f8", "falidos", "Alexsander Rodrigues Freire");

    // JOGO 3 — VIKINGS FUTSAL 2 X 1 SEGEL SPORT.
    data.results.f9 = {
        homeGoals: 2,
        awayGoals: 1,
        winner: null
    };

    addGoals("f9", "vikings", [
        { name: "Bruno Henrique de Matos", goals: 1 },
        { name: "Carlos Henrique da Silva Santos", goals: 1 }
    ]);

    addGoals("f9", "segel", [
        { name: "Bruno Otavio", goals: 1 }
    ]);

    addYellow("f9", "vikings", "Jonathan Damião Fernandes");
    addYellow("f9", "vikings", "Marcos Vinicius Aparecido dos Santos Oliveira");

    addYellow("f9", "segel", "Ryan Teodoro");
    addYellow("f9", "segel", "Gustavo Mendonça");

    saveData();
    localStorage.setItem(updateKey, "true");
}

// Aplica os três resultados e suas estatísticas de 19/11.
applyMatchesNovember19();


$("personForm").addEventListener("submit", event => {

    event.preventDefault();

    const id = $("personId").value;

    const name = $("personName").value.trim();
    const team = $("personTeam").value;
    const category = $("personCategory").value;
    const number = $("personNumber").value;
    const role = $("personRole").value;

    if (!name || !team || !category) {
        alert("Preencha os campos obrigatórios.");
        return;
    }

    const duplicate = data.people.find(person =>
        person.id !== id &&
        person.team === team &&
        person.category === category &&
        person.name.toLowerCase() === name.toLowerCase()
    );

    if (duplicate) {
        alert("Essa pessoa já está cadastrada nessa equipe.");
        return;
    }

    if (id) {

        const person = getPerson(id);

        if (!person) return;

        Object.assign(person, {
            name,
            team,
            category,
            number: category === "player" ? number : "",
            role
        });

    } else {

        data.people.push({
            id: crypto.randomUUID(),
            name,
            team,
            category,
            number: category === "player" ? number : "",
            role
        });

    }

    saveData();

    resetPersonForm();

    renderAll();

    renderRoster();

    renderEventPersonOptions();

    renderAdminStats();

    alert("Cadastro salvo com sucesso!");

});

$("cancelEdit").addEventListener("click", resetPersonForm);

function editPerson(id) {

    const person = getPerson(id);
    if (!person) return;

    $("personId").value = person.id;
    $("personName").value = person.name;
    $("personTeam").value = person.team;
    $("personCategory").value = person.category;
    $("personNumber").value = person.number || "";

    $("personRole").value = person.role || "";

    updateNumberField();

    $("personNumber").value = person.number || "";

    $("personSubmit").textContent = "SALVAR ALTERAÇÕES";

    $("cancelEdit").classList.remove("hidden");

    $("personForm").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

function deletePerson(id) {

    const person = getPerson(id);
    if (!person) return;

    const hasHistory = data.events.some(event =>
        event.personId === id
    );

    if (hasHistory) {
        alert(
            "Essa pessoa possui ocorrências registradas. " +
            "Para preservar o histórico, não é permitido excluí-la."
        );
        return;
    }

    if (!confirm(`Excluir ${person.name}?`)) return;

    data.people = data.people.filter(p => p.id !== id);

    saveData();

    renderAll();
    renderRoster();
    renderEventPersonOptions();
    renderAdminStats();
}

/* =====================================================
   LISTA DE ELENCOS DO PAINEL ADMINISTRATIVO
===================================================== */

function renderRoster() {

    const container = $("rosterList");
    if (!container) return;

    const teamFilter = $("rosterTeamFilter").value;
    const categoryFilter = $("rosterCategoryFilter").value;

    const people = data.people.filter(person => {

        const teamOK = teamFilter === "all" ||
            person.team === teamFilter;

        const categoryOK = categoryFilter === "all" ||
            person.category === categoryFilter;

        return teamOK && categoryOK;

    }).sort((a, b) => a.name.localeCompare(b.name));

    if (!people.length) {
        container.innerHTML = "<p>Nenhuma pessoa cadastrada.</p>";
        return;
    }

    container.innerHTML = people.map(person => `

        <div class="person-card">

            <h4>
                ${escapeHTML(person.name)}
                ${
                    person.category === "player" && person.number
                    ? ` • CAMISA ${escapeHTML(person.number)}`
                    : ""
                }
            </h4>

            <p>
                ${escapeHTML(getTeamName(person.team))}
                •
                ${person.category === "player" ? "JOGADOR" : "COMISSÃO TÉCNICA"}
            </p>

            <p>${escapeHTML(person.role || "Função não informada")}</p>

            <div class="person-actions">

                <button class="btn-secondary"
                    onclick="editPerson('${person.id}')">
                    EDITAR
                </button>

                <button class="btn-danger"
                    onclick="deletePerson('${person.id}')">
                    EXCLUIR
                </button>

            </div>

        </div>

    `).join("");
}

$("rosterTeamFilter").addEventListener("change", renderRoster);
$("rosterCategoryFilter").addEventListener("change", renderRoster);

/* =====================================================
   EVENTOS E OCORRÊNCIAS
===================================================== */

function renderEventSelectors() {

    const matchSelect = $("eventMatch");

    matchSelect.innerHTML = matches.map(match => {

        const playing = getMatchTeams(match);

        return `
            <option value="${match.id}">
                ${match.date} - ${getTeamName(playing.home)}
                x ${getTeamName(playing.away)}
            </option>
        `;

    }).join("");

    renderEventPersonOptions();
}

function renderEventPersonOptions() {

    const teamId = $("eventTeam").value;
    const select = $("eventPerson");

    if (!select) return;

    const people = data.people.filter(person =>
        person.team === teamId
    );

    select.innerHTML =
        `<option value="">Selecione uma pessoa</option>` +
        people.map(person => `

            <option value="${person.id}">
                ${escapeHTML(person.name)}
                ${person.category === "staff" ? "(Comissão)" : "(Jogador)"}
            </option>

        `).join("");
}

$("eventTeam").addEventListener("change", renderEventPersonOptions);

$("eventForm").addEventListener("submit", event => {

    event.preventDefault();

    const matchId = $("eventMatch").value;
    const teamId = $("eventTeam").value;
    const personId = $("eventPerson").value;
    const type = $("eventType").value;

    const minute = $("eventMinute").value;
    const note = $("eventNote").value.trim();

    const person = getPerson(personId);
    const match = getMatch(matchId);

    if (!person || !match) {
        alert("Selecione uma partida e uma pessoa válida.");
        return;
    }

    if (person.team !== teamId) {
        alert("A pessoa não pertence à equipe selecionada.");
        return;
    }

    if (type === "goal" && person.category !== "player") {
        alert("Somente jogadores podem receber registro de gol.");
        return;
    }

    const playing = getMatchTeams(match);

    if (teamId !== playing.home && teamId !== playing.away) {
        alert("Essa equipe não participa da partida selecionada.");
        return;
    }

    if (type === "goal" && !hasResult(matchId)) {
        alert(
            "Lance primeiro o resultado da partida antes de registrar gols."
        );
        return;
    }

    if (type === "goal") {

        const result = getScore(matchId);

        const eventGoals = data.events.filter(e =>
            e.matchId === matchId && e.type === "goal"
        );

        const alreadyScored = eventGoals.filter(e =>
            e.teamId === teamId
        ).length;

        const teamScore = teamId === playing.home
            ? Number(result.homeGoals)
            : Number(result.awayGoals);

        if (alreadyScored >= teamScore) {
            alert(
                "A quantidade de gols registrados para essa equipe " +
                "já atingiu o placar informado."
            );
            return;
        }
    }

    data.events.push({
        id: crypto.randomUUID(),
        matchId,
        teamId,
        personId,
        type,
        minute: minute === "" ? "" : Number(minute),
        note,
        createdAt: new Date().toISOString()
    });

    saveData();

    $("eventForm").reset();

    renderEventSelectors();
    renderAll();
    renderAdminEvents();
    renderAdminStats();

    alert("Ocorrência registrada com sucesso!");

});
/* =====================================================
   HISTÓRICO DE OCORRÊNCIAS
===================================================== */

function renderAdminEvents() {

    const container = $("adminEventsList");
    if (!container) return;

    const events = [...data.events].reverse();

    if (!events.length) {
        container.innerHTML = "<p>Nenhuma ocorrência registrada.</p>";
        return;
    }

    container.innerHTML = events.map(event => {

        const match = getMatch(event.matchId);

        return `

            <div class="event-card">

                <span class="event-tag ${getEventClass(event.type)}">
                    ${getEventIcon(event.type)}
                    ${getEventLabel(event.type).toUpperCase()}
                </span>

                <p>
                    <strong>${escapeHTML(getPersonName(event.personId))}</strong>
                    • ${escapeHTML(getTeamName(event.teamId))}
                </p>

                <p>
                    ${match ? match.date + " • " + match.time : "Partida"}
                    ${event.minute !== "" ? " • " + event.minute + "'" : ""}
                </p>

                ${event.note ? `<p>${escapeHTML(event.note)}</p>` : ""}

                <div class="event-actions">
                    <button class="btn-danger"
                        onclick="deleteEvent('${event.id}')">
                        EXCLUIR OCORRÊNCIA
                    </button>
                </div>

            </div>

        `;

    }).join("");
}

function deleteEvent(id) {

    if (!confirm("Excluir essa ocorrência?")) return;

    data.events = data.events.filter(event => event.id !== id);

    saveData();

    renderAll();
    renderAdminEvents();
    renderAdminStats();
}

/* =====================================================
   ESTATÍSTICAS INDIVIDUAIS
===================================================== */

function getPersonStats(personId) {

    const events = getPersonEvents(personId);

    return {
        goals: events.filter(e => e.type === "goal").length,
        yellow: events.filter(e => e.type === "yellow").length,
        red: events.filter(e => e.type === "red").length,
        suspensions: events.filter(e => e.type === "suspension").length
    };
}

/* =====================================================
   ARTILHARIA PÚBLICA
===================================================== */

function renderScorers() {

    const container = $("scorersList");
    if (!container) return;

    const ranking = data.people
        .filter(person => person.category === "player")
        .map(person => ({
            ...person,
            ...getPersonStats(person.id)
        }))
        .filter(person => person.goals > 0)
        .sort((a, b) =>
            b.goals - a.goals ||
            a.name.localeCompare(b.name)
        );

    if (!ranking.length) {
        container.innerHTML = "<p>Nenhum gol registrado ainda.</p>";
        return;
    }

    container.innerHTML = ranking.map((person, index) => `

        <div class="scorer-item">
            <span>
                ${index + 1}º -
                ${escapeHTML(person.name)}${person.nickname ? ` (${escapeHTML(person.nickname)})` : ""}
                <small>(${escapeHTML(getTeamName(person.team))})</small>
            </span>

            <strong>${person.goals} GOLS</strong>
        </div>

    `).join("");
}

/* =====================================================
   DISCIPLINA PÚBLICA
===================================================== */

function renderPublicDiscipline() {

    const container = $("disciplineList");
    if (!container) return;

    const ranking = data.people
        .map(person => ({
            ...person,
            ...getPersonStats(person.id)
        }))
        .filter(person => person.yellow > 0 || person.red > 0)
        .sort((a, b) =>
            b.red - a.red ||
            b.yellow - a.yellow
        );

    if (!ranking.length) {
        container.innerHTML = "<p>Nenhum cartão registrado.</p>";
        return;
    }

    container.innerHTML = ranking.map(person => `

        <div class="discipline-item">

            <span>
                ${escapeHTML(person.name)}
                <small>(${escapeHTML(getTeamName(person.team))})</small>
            </span>

            <strong>
                🟨 ${person.yellow}
                &nbsp;
                🟥 ${person.red}
            </strong>

        </div>

    `).join("");
}

/* =====================================================
   SUSPENSÕES PÚBLICAS
===================================================== */

function renderSuspensions() {

    const container = $("suspensionsList");
    if (!container) return;

    const suspended = data.people
        .map(person => ({
            ...person,
            ...getPersonStats(person.id)
        }))
        .filter(person => person.suspensions > 0);

    if (!suspended.length) {
        container.innerHTML = "<p>Nenhuma suspensão registrada.</p>";
        return;
    }

    container.innerHTML = suspended.map(person => `

        <div class="suspension-item">

            <span>
                ${escapeHTML(person.name)}
                <small>(${escapeHTML(getTeamName(person.team))})</small>
            </span>

            <strong>
                ${person.suspensions} suspensão(ões)
            </strong>

        </div>

    `).join("");
}

/* =====================================================
   ESTATÍSTICAS GERAIS
===================================================== */

function renderStats() {

    const container = $("statsGrid");
    if (!container) return;

    const played = matches.filter(match =>
        hasResult(match.id)
    ).length;

    const goals = data.events.filter(event =>
        event.type === "goal"
    ).length;

    const yellow = data.events.filter(event =>
        event.type === "yellow"
    ).length;

    const red = data.events.filter(event =>
        event.type === "red"
    ).length;

    const suspensions = data.events.filter(event =>
        event.type === "suspension"
    ).length;

    container.innerHTML = `

        <div class="stat-card">
            <strong>${played}</strong>
            <span>Jogos realizados</span>
        </div>

        <div class="stat-card">
            <strong>${goals}</strong>
            <span>Gols registrados</span>
        </div>

        <div class="stat-card">
            <strong>${yellow + red}</strong>
            <span>Total de cartões</span>
        </div>

        <div class="stat-card">
            <strong>${yellow}</strong>
            <span>Cartões amarelos</span>
        </div>

        <div class="stat-card">
            <strong>${red}</strong>
            <span>Cartões vermelhos</span>
        </div>

        <div class="stat-card">
            <strong>${suspensions}</strong>
            <span>Suspensões registradas</span>
        </div>

    `;
}

/* =====================================================
   RELATÓRIO ADMINISTRATIVO INDIVIDUAL
===================================================== */

function renderAdminStats() {

    const tbody = $("adminStats");
    if (!tbody) return;

    const people = [...data.people].sort((a, b) =>
        a.name.localeCompare(b.name)
    );

    if (!people.length) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6">Nenhuma pessoa cadastrada.</td>
            </tr>
        `;
        return;
    }

    tbody.innerHTML = people.map(person => {

        const stats = getPersonStats(person.id);

        return `

            <tr>
                <td>
                    ${escapeHTML(person.name)}
                    <small>
                        ${person.category === "player" ? "Jogador" : "Comissão"}
                    </small>
                </td>

                <td>${escapeHTML(getTeamName(person.team))}</td>
                <td>${stats.goals}</td>
                <td>${stats.yellow}</td>
                <td>${stats.red}</td>
                <td>${stats.suspensions}</td>
            </tr>

        `;

    }).join("");
}
/* =====================================================
   LANÇAMENTO DE RESULTADOS
===================================================== */

function renderAdminMatches() {

    const container = $("adminMatches");
    if (!container) return;

    container.innerHTML = matches.map(match => {

        const playing = getMatchTeams(match);

        const result = getScore(match.id);

        const home = playing.home;
        const away = playing.away;

        const ready = Boolean(home && away);

        return `

            <div class="match-card admin-match">

                <h3>${getPhaseName(match.phase)}</h3>

                <small>
                    ${match.date} • ${match.time}
                </small>

                <p>
                    <strong>${escapeHTML(getTeamName(home))}</strong>
                    X
                    <strong>${escapeHTML(getTeamName(away))}</strong>
                </p>

                <div class="admin-score-inputs">

                    <input
                        type="number"
                        min="0"
                        step="1"
                        placeholder="Casa"
                        data-match="${match.id}"
                        data-side="home"
                        value="${result.homeGoals ?? ""}"
                        ${!ready ? "disabled" : ""}
                    >

                    <strong>X</strong>

                    <input
                        type="number"
                        min="0"
                        step="1"
                        placeholder="Visitante"
                        data-match="${match.id}"
                        data-side="away"
                        value="${result.awayGoals ?? ""}"
                        ${!ready ? "disabled" : ""}
                    >

                </div>

                ${
                    match.knockout && match.phase !== "semiA"
                    ? `

                        <label>
                            Vencedor em caso de empate:
                        </label>

                        <select data-winner="${match.id}"
                            ${!ready ? "disabled" : ""}>

                            <option value="">Selecione o vencedor</option>

                            <option value="${home || ""}"
                                ${result.winner === home ? "selected" : ""}>
                                ${escapeHTML(getTeamName(home))}
                            </option>

                            <option value="${away || ""}"
                                ${result.winner === away ? "selected" : ""}>
                                ${escapeHTML(getTeamName(away))}
                            </option>

                        </select>

                    `
                    : ""
                }

                ${
                    match.phase === "semiA"
                    ? `<small>Em caso de empate, o primeiro colocado tem vantagem.</small>`
                    : ""
                }

                ${
                    !ready
                    ? `<small>AGUARDANDO DEFINIÇÃO DOS CLASSIFICADOS</small>`
                    : ""
                }

            </div>

        `;

    }).join("");
}

/* =====================================================
   SALVAR RESULTADOS
===================================================== */

$("saveResults").addEventListener("click", () => {

    const inputs = document.querySelectorAll(
        "#adminMatches [data-match][data-side]"
    );

    const updated = {};

    for (const input of inputs) {

        const matchId = input.dataset.match;
        const side = input.dataset.side;

        if (!updated[matchId]) {
            updated[matchId] = { ...getScore(matchId) };
        }

        if (input.value.trim() === "") {
            updated[matchId][side + "Goals"] = null;
        } else {

            const value = Number(input.value);

            if (!Number.isInteger(value) || value < 0) {
                alert("Informe placares inteiros e não negativos.");
                return;
            }

            updated[matchId][side + "Goals"] = value;
        }
    }

    for (const [matchId, result] of Object.entries(updated)) {

        if (
            (result.homeGoals === null) !==
            (result.awayGoals === null)
        ) {
            alert("Preencha os dois placares ou deixe os dois vazios.");
            return;
        }

        if (result.homeGoals === null) {
            delete data.results[matchId];
        } else {
            data.results[matchId] = result;
        }
    }

    document.querySelectorAll(
        "#adminMatches [data-winner]"
    ).forEach(select => {

        const matchId = select.dataset.winner;

        if (!data.results[matchId]) return;

        const match = getMatch(matchId);
        const result = data.results[matchId];

        if (result.homeGoals === result.awayGoals) {
            result.winner = select.value || null;
        } else {
            result.winner = null;
        }
    });

    for (const match of matches.filter(m => m.knockout)) {

        if (!hasResult(match.id)) continue;

        const result = getScore(match.id);

        if (
            result.homeGoals === result.awayGoals &&
            match.phase !== "semiA" &&
            !result.winner
        ) {
            alert(
                `Defina o vencedor do confronto ${match.id} em caso de empate.`
            );
            return;
        }
    }

    saveData();

    renderAll();

    renderAdminMatches();

    renderAdminStats();

    $("saveMessage").textContent =
        "Resultados salvos com sucesso!";

});

/* =====================================================
   ABAS DO PAINEL
===================================================== */

document.querySelectorAll(".admin-tab").forEach(button => {

    button.addEventListener("click", () => {

        document.querySelectorAll(".admin-tab").forEach(tab =>
            tab.classList.remove("active")
        );

        document.querySelectorAll(".admin-content").forEach(content =>
            content.classList.remove("active")
        );

        button.classList.add("active");

        $(button.dataset.tab).classList.add("active");

        if (button.dataset.tab === "tabMatches") {
            renderAdminMatches();
        }

        if (button.dataset.tab === "tabTeams") {
            renderRoster();
        }

        if (button.dataset.tab === "tabEvents") {
            renderAdminEvents();
            renderEventSelectors();
        }

        if (button.dataset.tab === "tabStats") {
            renderAdminStats();
        }

    });

});

/* =====================================================
   LOGIN
===================================================== */

$("loginBtn").addEventListener("click", () => {

    const password = $("adminPassword").value;

    if (password === ADMIN_PASSWORD) {

        $("adminLogin").classList.add("hidden");
        $("adminPanel").classList.remove("hidden");

        $("loginError").textContent = "";

        renderAdminMatches();
        renderRoster();
        renderEventSelectors();
        renderAdminEvents();
        renderAdminStats();

    } else {

        $("loginError").textContent = "Senha incorreta!";

    }

});

$("adminPassword").addEventListener("keydown", event => {

    if (event.key === "Enter") {
        $("loginBtn").click();
    }

});

$("logoutBtn").addEventListener("click", () => {

    $("adminPanel").classList.add("hidden");
    $("adminLogin").classList.remove("hidden");

    $("adminPassword").value = "";

});
/* =====================================================
   BACKUP: EXPORTAR
===================================================== */

$("exportBackup").addEventListener("click", () => {

    const backup = {
        version: 1,
        championship: "November Fest Futsal 2026",
        exportedAt: new Date().toISOString(),
        data
    };

    const blob = new Blob(
        [JSON.stringify(backup, null, 2)],
        { type: "application/json" }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "backup-november-fest-2026.json";

    link.click();

    URL.revokeObjectURL(url);

});

/* =====================================================
   BACKUP: IMPORTAR
===================================================== */

$("importBackup").addEventListener("change", async event => {

    const file = event.target.files[0];

    if (!file) return;

    try {

        const text = await file.text();

        const backup = JSON.parse(text);

        const imported = backup.data || backup;

        if (
            !imported ||
            !Array.isArray(imported.people) ||
            !imported.results ||
            !Array.isArray(imported.events)
        ) {
            alert("Arquivo de backup inválido.");
            return;
        }

        data = {
            people: imported.people,
            results: imported.results,
            events: imported.events
        };

        saveData();

        renderAll();
        renderAdminMatches();
        renderRoster();
        renderEventSelectors();
        renderAdminEvents();
        renderAdminStats();

        alert("Backup importado com sucesso!");

    } catch (error) {

        console.error("Erro ao importar backup:", error);

        alert("Não foi possível importar esse arquivo.");

    }

    event.target.value = "";

});

/* =====================================================
   APAGAR TODOS OS DADOS
===================================================== */

$("resetData").addEventListener("click", () => {

    const confirmed = confirm(
        "ATENÇÃO!\n\n" +
        "Isso apagará jogadores, comissão, resultados, " +
        "cartões, gols e suspensões.\n\n" +
        "Deseja continuar?"
    );

    if (!confirmed) return;

    data = emptyData();

    saveData();

    renderAll();
    renderAdminMatches();
    renderRoster();
    renderEventSelectors();
    renderAdminEvents();
    renderAdminStats();

    resetPersonForm();

    $("saveMessage").textContent = "Dados apagados.";

    alert("Dados do campeonato apagados.");

});

/* =====================================================
   MENU MOBILE
===================================================== */

$("menuBtn").addEventListener("click", () => {
    $("nav").classList.toggle("open");
});

document.querySelectorAll("#nav a").forEach(link => {

    link.addEventListener("click", () => {
        $("nav").classList.remove("open");
    });

});

/* =====================================================
   ATUALIZAR TODO O SITE
===================================================== */

function renderAll() {

    renderTeams();

    renderMatches(
        document.querySelector(".filter.active")?.dataset.filter || "todos"
    );

    renderStandings("A", "groupA");
    renderStandings("B", "groupB");

    renderBracket();

    renderStats();
    renderScorers();
    renderPublicDiscipline();
    renderSuspensions();

}

/* =====================================================
   INICIALIZAÇÃO
===================================================== */

renderTeamSelects();

renderAll();

renderEventSelectors();

renderRoster();

renderAdminMatches();

renderAdminEvents();

renderAdminStats();