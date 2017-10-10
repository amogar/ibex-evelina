var theShuffle = rshuffle("c1", "c2", "c3", "c4", "c5", "c6");

var shuffleSequence = seq("intro", "consent", sepWith("sep", seq(theShuffle)));
var practiceItemTypes = ["practice"];

var defaults = [
    "Separator", {
        transfer: 500,
        normalMessage: "",
        ignoreFailure: true
    },
    "DashedSentence", {
        mode: "self-paced reading"
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3"],
        presentHorizontally: false,
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(Bad)", rightComment: "(Good)",
        timeout: null
    },
    "Question", {
        randomOrder: false,
        as: [['f', 'el'], ['j', 'la']],
        presentHorizontally: true,
        timeout: 3000
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: false
    }
];

//DID CHANGE TO VALUE OF CSS_INCLUDES_DIR in server_conf.py. Change this back to "css_includes" if messed up
var items = [

    // New in Ibex 0.3-beta-9. You can now add a '__SendResults__' controller in your shuffle
    // sequence to send results before the experiment has finished. This is NOT intended to allow
    // for incremental sending of results -- you should send results exactly once per experiment.
    // However, it does permit additional messages to be displayed to participants once the
    // experiment itself is over. If you are manually inserting a '__SendResults__' controller into
    // the shuffle sequence, you must set the 'manualSendResults' configuration variable to 'true', since
    // otherwise, results are automatically sent at the end of the experiment.
    //
    //["sr", "__SendResults__", { }],

    ["sep", "Separator", { }],

    ["intro", "Message", {html: {include: "intro1.html"}, transfer: "keypress"}],
    ["intro", "Message", {html: {include: "intro2.html"}, transfer: "keypress"}],
    ["intro", "Message", {html: {include: "intro3.html"}, transfer: "keypress"}],
    ["intro", "Message", {html: {include: "intro4.html"}, transfer: "keypress"}],
    ["intro", "Form", {html: {include: "intro5.html"}}],


    ["consent", "Form", {
      html: {include: "consent.html"}
    }],

    // New in Ibex 0.3-beta19. You can now determine the point in the experiment at which the counter
    // for latin square designs will be updated. (Previously, this was always updated upon completion
    // of the experiment.) To do this, insert the special '__SetCounter__' controller at the desired
    // point in your running order. If given no options, the counter is incremented by one. If given
    // an 'inc' option, the counter is incremented by the specified amount. If given a 'set' option,
    // the counter is set to the given number. (E.g., { set: 100 }, { inc: -1 })
    //
    //["setcounter", "__SetCounter__", { }],

    // NOTE: You could also use the 'Message' controller for the experiment intro (this provides a simple
    // consent checkbox).

    ["c1", "AcceptabilityJudgment", {s: "Η Μαρία έφαγε το αχλάδι."}],
    ["c1", "AcceptabilityJudgment", {s: "Η Ελένη έχασε το πακέτο."}],
    ["c1", "AcceptabilityJudgment", {s: "Ο Σταμάτης πούλησε τη μηχανή."}],

    ["c2", "AcceptabilityJudgment", {s: "Έσπασε ο Νικόλας τη βιτρίνα."}],
    ["c2", "AcceptabilityJudgment", {s: "Κρέμασε η Ελίζα τον πίνακα."}],
    ["c2", "AcceptabilityJudgment", {s: "Τάισε η Μαρίνα το γατάκι"}],

    ["c3", "AcceptabilityJudgment", {s: "Τον καναπέ λέρωσε ο Αλέξης."}],
    ["c3", "AcceptabilityJudgment", {s: "Το ποτήρι ράγισε ο Νικήτας."}],
    ["c3", "AcceptabilityJudgment", {s: "Το βιβλίο διάβασε η Φωτεινή."}],

    ["c4", "AcceptabilityJudgment", {s: "Η Αλίκη το λουλούδι μύρισε."}],
    ["c4", "AcceptabilityJudgment", {s: "Ο Μανώλης τo φαγητό έκαψε."}],
    ["c4", "AcceptabilityJudgment", {s: "Ο Ανέστης το καπέλο φόρεσε."}],

    ["c5", "AcceptabilityJudgment", {s: "Έσκισε την κουρτίνα η Ελίνα."}],
    ["c5", "AcceptabilityJudgment", {s: "Έφτιαξε το παγωτό η Χριστίνα."}],
    ["c5", "AcceptabilityJudgment", {s: "Έσκασε το μπαλόνι η Ειρήνη."}],

    ["c6", "AcceptabilityJudgment", {s: "Το χαλάκι ο Μάριος τίναξε."}],
    ["c6", "AcceptabilityJudgment", {s: "Το δεντράκι ο Ηλίας πότισε."}],
    ["c6", "AcceptabilityJudgment", {s: "Το πάτωμα ο Γρηγόρης σκούπισε."}]
];
