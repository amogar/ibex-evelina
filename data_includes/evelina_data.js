var theShuffle1 = rshuffle("T1-C1", "T1-C2", "T1-C3", "T1-C4", "T1-C5", "T1-C6", "T1-filler");
var theShuffle2 = rshuffle("T2-C1", "T2-C2", "T2-C3", "T2-C4", "T2-C5", "T2-C6", "T2-filler");
var theShuffle3 = rshuffle("T3-C1", "T3-C2", "T3-filler");

var shuffleSequence = seq("intro", "practice", "taskBegin", sepWith("sep", seq(theShuffle1, "break1", theShuffle2, "break2", theShuffle3)));

var practiceItemTypes = ["practice"];
var practiceMessage = "πρακτική";
var completionMessage = "Tο πείραμα ολοκληρώθηκε με απόλυτη επιτυχία! Ευχαριστούμε για τη συμμετοχή σου! Μπορείς να επικοινωνήσεις μαζί μας οποιαδήποτε στιγμή στο evelina.leivada@uit.no";

var defaults = [
    "Separator", {
        transfer: 500,
        normalMessage: "",
        ignoreFailure: true,
        hideProgressBar: true
    },
    "DashedSentence", {
        mode: "self-paced reading"
    },
    "AcceptabilityJudgment", {
        as: [["1", "Λάθος"], ["2", "Ούτε σωστό, ούτε λάθος"], ["3", "Σωστό"]],
        presentHorizontally: false,
        presentAsScale: false,
        instructions: null,
        leftComment: "(Bad)", rightComment: "(Good)",
        timeout: null,
        hideProgressBar: true
    },
    "Question", {
        randomOrder: false,
        as: [['f', 'el'], ['j', 'la']],
        presentHorizontally: true,
        timeout: 3000,
        hideProgressBar: true
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

    ["intro", "Message", {html: {include: "intro1.html"}, transfer: "click"}],
    ["intro", "Message", {html: {include: "intro2.html"}, transfer: "click"}],
    ["intro", "Message", {html: {include: "intro3.html"}, transfer: "click"}],
    ["intro", "Message", {html: {include: "intro4.html"}, transfer: "click"}],
    ["intro", "Form", {html: {include: "intro5.html"}}],


    ["intro", "Form", {
      html: {include: "consent.html"}
    }],
    ["intro", "Form", {
      html: {include: "greekQuestionnaire.html"}
    }],
    ["intro", "Message", {html: {include: "preTask.html"}, transfer: "keypress"}],
    ["break1", "Message", {html: "To πρώτο μέρος του πειράματος τελείωσε με επιτυχία! Πίεσε το πλήκρο 1 για να ξεκινήσεις το δεύτερο μέρος", transfer:"keypress"}],
    ["break2", "Message", {html: "To δεύτερο μέρος του πειράματος τελείωσε με επιτυχία! Πίεσε το πλήκρο 1 για να ξεκινήσεις το δεύτερο μέρος", transfer:"keypress"}],
    ["taskBegin", "Message", {html: "<b>Πολύ ωραία! Τώρα θα ξεκινήσει το πείραμα. Πίεσε το πλήκρο 1 για να το ξεκινήσεις.</b>", transfer:"keypress"}],

    // New in Ibex 0.3-beta19. You can now determine the point in the experiment at which the counter
    // for latin square designs will be updated. (Previously, this was always updated upon completion
    // of the experiment.) To do this, insert the special '__SetCounter__' controller at the desired
    // point in your running order. If given no options, the counter is incremented by one. If given
    // an 'inc' option, the counter is incremented by the specified amount. If given a 'set' option,
    // the counter is set to the given number. (E.g., { set: 100 }, { inc: -1 })
    //
    //["setcounter", "__SetCounter__", { }],



    //practice items
    ["practice", "AcceptabilityJudgment", {s: "Πίεσε το πλήκτρο 1."}],
    ["practice", "AcceptabilityJudgment", {s: "Πίεσε το πλήκρο 2."}],
    ["practice", "AcceptabilityJudgment", {s: "Πίεσε το πλήκτρο 3."}],
    ["practice", "AcceptabilityJudgment", {s: "Πίεσε το πλήκτρο 1."}],
    ["practice", "AcceptabilityJudgment", {s: "Πίεσε το πλήκτρο 2."}],
    ["practice", "AcceptabilityJudgment", {s: "Πίεσε το πλήκτρο 3."}],
    ["practice", "AcceptabilityJudgment", {s: "Πίεσε το πλήκτρο 2."}],
    ["practice", "AcceptabilityJudgment", {s: "Πίεσε το πλήκτρο 3."}],
    ["practice", "AcceptabilityJudgment", {s: "Πίεσε το πλήκρο 1."}],
    ["practice", "AcceptabilityJudgment", {s: "Πίεσε το πλήκτρο 3."}],
    ["practice", "AcceptabilityJudgment", {s: "Πίεσε το πλήκτρο 2."}],
    ["practice", "AcceptabilityJudgment", {s: "Πίεσε το πλήκτρο 1."}],
    ["practice", "AcceptabilityJudgment", {s: "Πίεσε το πλήκρο 2."}],
    ["practice", "AcceptabilityJudgment", {s: "Πίεσε το πλήκτρο 3."}],
    ["practice", "AcceptabilityJudgment", {s: "Πίεσε το πλήκτρο 1."}],

      //task 1
    ["T1-C1", "AcceptabilityJudgment", {s: "Η Μαρία έφαγε το αχλάδι."}],
    ["T1-C1", "AcceptabilityJudgment", {s: "Η Ελένη έχασε το πακέτο."}],
    ["T1-C1", "AcceptabilityJudgment", {s: "Ο Σταμάτης πούλησε τη μηχανή."}],

    ["T1-C2", "AcceptabilityJudgment", {s: "Έσπασε ο Νικόλας τη βιτρίνα."}],
    ["T1-C2", "AcceptabilityJudgment", {s: "Κρέμασε η Ελίζα τον πίνακα."}],
    ["T1-C2", "AcceptabilityJudgment", {s: "Τάισε η Μαρίνα το γατάκι."}],

    ["T1-C3", "AcceptabilityJudgment", {s: "Τον καναπέ λέρωσε ο Αλέξης."}],
    ["T1-C3", "AcceptabilityJudgment", {s: "Το ποτήρι ράγισε ο Νικήτας."}],
    ["T1-C3", "AcceptabilityJudgment", {s: "Το βιβλίο διάβασε η Φωτεινή."}],

    ["T1-C4", "AcceptabilityJudgment", {s: "Η Αλίκη το λουλούδι μύρισε."}],
    ["T1-C4", "AcceptabilityJudgment", {s: "Ο Μανώλης τo φαγητό έκαψε."}],
    ["T1-C4", "AcceptabilityJudgment", {s: "Ο Ανέστης το καπέλο φόρεσε."}],

    ["T1-C5", "AcceptabilityJudgment", {s: "Έσκισε την κουρτίνα η Ελίνα."}],
    ["T1-C5", "AcceptabilityJudgment", {s: "Έφτιαξε το παγωτό η Χριστίνα."}],
    ["T1-C5", "AcceptabilityJudgment", {s: "Έσκασε το μπαλόνι η Ειρήνη."}],

    ["T1-C6", "AcceptabilityJudgment", {s: "Το χαλάκι ο Μάριος τίναξε."}],
    ["T1-C6", "AcceptabilityJudgment", {s: "Το δεντράκι ο Ηλίας πότισε."}],
    ["T1-C6", "AcceptabilityJudgment", {s: "Το πάτωμα ο Γρηγόρης σκούπισε."}],

    ["T1-filler", "AcceptabilityJudgment", {s: "Πήγα στο σπίτι μετά τις τέσσερις."}],
    ["T1-filler", "AcceptabilityJudgment", {s: "Έχω πάει στο Παρίσι τρεις φορές."}],
    ["T1-filler", "AcceptabilityJudgment", {s: "Χάθηκε στον δρόμο για το σπίτι της."}],
    ["T1-filler", "AcceptabilityJudgment", {s: "Περπάτησα αργά προς τη θάλασσα."}],
    ["T1-filler", "AcceptabilityJudgment", {s: "Κοιμηθήκαμε για δώδεκα ώρες."}],
    ["T1-filler", "AcceptabilityJudgment", {s: "Βρεθήκαμε στην πόρτα του μουσείου."}],
    ["T1-filler", "AcceptabilityJudgment", {s: "Κολυμπήσαμε αργά προς την ακτή."}],
    ["T1-filler", "AcceptabilityJudgment", {s: "Φέτος πήγα σε δύο συναυλίες."}],
    ["T1-filler", "AcceptabilityJudgment", {s: "Χορέψαμε στον ρυθμό της μουσικής."}],
    ["T1-filler", "AcceptabilityJudgment", {s: "Γυμναστήριο στο δεν πήγα εχθές."}],
    ["T1-filler", "AcceptabilityJudgment", {s: "Ξεκουράστηκα όμορφο νησί στο."}],
    ["T1-filler", "AcceptabilityJudgment", {s: "Φωτογραφήθηκαν παραλία στην."}],
    ["T1-filler", "AcceptabilityJudgment", {s: "Αποκοιμήθηκε γκρι καναπέ στον."}],
    ["T1-filler", "AcceptabilityJudgment", {s: "Απολύθηκε δεύτερη μέρα τη."}],
    ["T1-filler", "AcceptabilityJudgment", {s: "Εξαντλήθηκε υπερωρίες στις."}],
    ["T1-filler", "AcceptabilityJudgment", {s: "Γνωρίστηκαν φετινές διακοπές στις."}],
    ["T1-filler", "AcceptabilityJudgment", {s: "Στράφηκε ξαφνικά μου εναντίον."}],
    ["T1-filler", "AcceptabilityJudgment", {s: "Εμφανίστηκε τηλεόραση στην."}],
    ["T1-filler", "AcceptabilityJudgment", {s: "Ενθουσιάζεται μικρό παιδί σαν."}],
    ["T1-filler", "AcceptabilityJudgment", {s: "Καυγάδιζαν τη πάλι όλη μέρα."}],
    ["T1-filler", "AcceptabilityJudgment", {s: "Συγκρούστηκαν με αστυνομία την."}],
    ["T1-filler", "AcceptabilityJudgment", {s: "Χόρεψαν εκδήλωση στην του δήμου."}],
    ["T1-filler", "AcceptabilityJudgment", {s: "Στην παντρεύτηκαν εκκλησία μικρή."}],
    ["T1-filler", "AcceptabilityJudgment", {s: "Στη γράφτηκα ομάδα θεατρική."}],
    ["T1-filler", "AcceptabilityJudgment", {s: "Στην μαγείρεψαν καινούργια κουζίνα."}],
    ["T1-filler", "AcceptabilityJudgment", {s: "Τις εκνευρίστηκε νέες φήμες με."}],
    ["T1-filler", "AcceptabilityJudgment", {s: "Δούλεψα Κίνα για στη δύο χρόνια."}],
    ["T1-filler", "AcceptabilityJudgment", {s: "Τις επισκέφτηκα όλες ηπείρους."}],
    ["T1-filler", "AcceptabilityJudgment", {s: "Κατασκήνωσαν στη κοντά λιμνούλα."}],
    ["T1-filler", "AcceptabilityJudgment", {s: "Στη προσγειώθηκαν Βενεζουέλα."}],
    ["T1-filler", "AcceptabilityJudgment", {s: "Tρόμαξα δυνατές με τις κραυγές της."}],
    ["T1-filler", "AcceptabilityJudgment", {s: "Κλειδώθηκαν από έξω το σπίτι."}],
    ["T1-filler", "AcceptabilityJudgment", {s: "Γύρισε διακοπές τις από προχθές."}],
    ["T1-filler", "AcceptabilityJudgment", {s: "Κατέφθασε με φορτωμένος δώρα."}],
    ["T1-filler", "AcceptabilityJudgment", {s: "Ετοιμάστηκε είκοσι σε λεπτά."}],
    ["T1-filler", "AcceptabilityJudgment", {s: "Κατέβηκα κέντρο στο με τα πόδια."}],

    //task 2

    ["T2-C1", "AcceptabilityJudgment", {s: "Βρήκα μία μεγάλη γαλλική βεντάλια."}],
    ["T2-C1", "AcceptabilityJudgment", {s: "Βρήκα ένα μικρό γερμανικό κινητό."}],
    ["T2-C1", "AcceptabilityJudgment", {s: "Βρήκα ένα λεπτό ελβετικό ρολόι."}],

    ["T2-C2", "AcceptabilityJudgment", {s: "Βρήκα ένα ιταλικό μακρύ φόρεμα."}],
    ["T2-C2", "AcceptabilityJudgment", {s: "Βρήκα ένα κινέζικο χοντρό πάπλωμα."}],
    ["T2-C2", "AcceptabilityJudgment", {s: "Βρήκα ένα σουηδικό φαρδύ κρεβάτι. "}],

    ["T2-C3", "AcceptabilityJudgment", {s: "Είδα ένα τετράγωνο μαύρο τραπέζι."}],
    ["T2-C3", "AcceptabilityJudgment", {s: "Είδα μία μακρόστενη γκρίζα κουβέρτα."}],
    ["T2-C3", "AcceptabilityJudgment", {s: "Είδα έναν οβάλ ασπρόμαυρο καναπέ."}],

    ["T2-C4", "AcceptabilityJudgment", {s: "Είδα ένα καφέ τριγωνικό μαντίλι."}],
    ["T2-C4", "AcceptabilityJudgment", {s: "Είδα έναν άσπρο κυλινδρικό σωλήνα."}],
    ["T2-C4", "AcceptabilityJudgment", {s: "Είδα ένα κίτρινο στρογγυλό διαμάντι."}],

    ["T2-C5", "AcceptabilityJudgment", {s: "Πήρα ένα κομψό μεταλλικό μπαούλο."}],
    ["T2-C5", "AcceptabilityJudgment", {s: "Πήρα μία υπέροχη χρυσή καρφίτσα."}],
    ["T2-C5", "AcceptabilityJudgment", {s: "Πήρα ένα φρικτό δερμάτινο καπέλο."}],

    ["T2-C6", "AcceptabilityJudgment", {s: "Πήρα ένα ξύλινο ωραίο γραφείο."}],
    ["T2-C6", "AcceptabilityJudgment", {s: "Πήρα ένα βαμβακερό απλό σεντόνι."}],
    ["T2-C6", "AcceptabilityJudgment", {s: "Πήρα ένα μάλλινο όμορφο φουστάνι. "}],

    ["T2-filler", "AcceptabilityJudgment", {s: "Η Λίνα δουλεύει στο εθνικό μουσείο."}],
    ["T2-filler", "AcceptabilityJudgment", {s: "H τηλεόραση παίζει πολύ δυνατά."}],
    ["T2-filler", "AcceptabilityJudgment", {s: "H Βίκυ είναι η καλύτερή μου φίλη."}],
    ["T2-filler", "AcceptabilityJudgment", {s: "Πούλησα το καινούργιο αυτοκίνητό μου."}],
    ["T2-filler", "AcceptabilityJudgment", {s: "Ξέχασα το τετράδιο στο δωμάτιο."}],
    ["T2-filler", "AcceptabilityJudgment", {s: "Είπα ένα ποίημα στη σχολική γιορτή."}],
    ["T2-filler", "AcceptabilityJudgment", {s: "Γύρισε από το ταξίδι κουρασμένος."}],
    ["T2-filler", "AcceptabilityJudgment", {s: "Το κορίτσι φοβήθηκε από τις βροντές."}],
    ["T2-filler", "AcceptabilityJudgment", {s: "Ο Αλέξης περιποιήθηκε τον κήπο."}],
    ["T2-filler", "AcceptabilityJudgment", {s: "Αγοράσαμε όμορφο σπιτάκι ένα."}],
    ["T2-filler", "AcceptabilityJudgment", {s: "Φάγαμε ένα ωραίο ταβερνάκι σε."}],
    ["T2-filler", "AcceptabilityJudgment", {s: "Eίδα το προχθές μικρό παιδί του Αντώνη."}],
    ["T2-filler", "AcceptabilityJudgment", {s: "Αλεξάνδρα βρήκε καινούργια δουλειά η."}],
    ["T2-filler", "AcceptabilityJudgment", {s: "Το άρθρο δημοσιεύτηκε Σάββατο το."}],
    ["T2-filler", "AcceptabilityJudgment", {s: "Το αγοράκι έφαγε τα όλα γλυκά."}],
    ["T2-filler", "AcceptabilityJudgment", {s: "Το στο τραγούδι ακούστηκε ραδιόφωνο."}],
    ["T2-filler", "AcceptabilityJudgment", {s: "Γείτονες οι αγόρασαν καινούργιο σπίτι."}],
    ["T2-filler", "AcceptabilityJudgment", {s: "Μαρίνα μάζεψε η κόκκινα λουλούδια."}],
    ["T2-filler", "AcceptabilityJudgment", {s: "Στην ο Νικόλας ταξίδεψε Αμερική."}],
    ["T2-filler", "AcceptabilityJudgment", {s: "Βρήκα στην ένα μικρό σκυλάκι αυλή μoυ."}],
    ["T2-filler", "AcceptabilityJudgment", {s: "H τα Ειρήνη έβαψε μαλλιά της ξανθά."}],
    ["T2-filler", "AcceptabilityJudgment", {s: "Χτες βράδυ πήγαμε κινηματογράφο στον."}],
    ["T2-filler", "AcceptabilityJudgment", {s: "Πήρα μεταχειρισμένο αμάξι ένα."}],
    ["T2-filler", "AcceptabilityJudgment", {s: "Είδα τέσσερα στον τριαντάφυλλα κήπο."}],
    ["T2-filler", "AcceptabilityJudgment", {s: "Έβαψα την πόρτα της αυλής πράσινη μας."}],
    ["T2-filler", "AcceptabilityJudgment", {s: "Έφαγα ένα κόκκινο το μήλο πρωί."}],
    ["T2-filler", "AcceptabilityJudgment", {s: "Έλυσα ασκήσεις με πολλή προσοχή τις."}],
    ["T2-filler", "AcceptabilityJudgment", {s: "Πήγα για ποτό αγαπημένο στο μου μπαρ."}],
    ["T2-filler", "AcceptabilityJudgment", {s: "Προχθές με επισκέφτηκαν ξαδέρφια τα μου."}],
    ["T2-filler", "AcceptabilityJudgment", {s: "Οι μαθητές έγραψαν χθες διαγώνισμα μας."}],
    ["T2-filler", "AcceptabilityJudgment", {s: "Ηλίας ο κολυμπάει κάθε βδομάδα."}],
    ["T2-filler", "AcceptabilityJudgment", {s: "Μίνα τρώει σοκολάτα η κάθε μέρα."}],
    ["T2-filler", "AcceptabilityJudgment", {s: "Tα παιδιά παίζουν χαρούμενα σαλόνι στο."}],
    ["T2-filler", "AcceptabilityJudgment", {s: "Το μωρό παίζει ήσυχα κούκλα με την του."}],
    ["T2-filler", "AcceptabilityJudgment", {s: "To γραφείο είναι μου γεμάτο βιβλία."}],
    ["T2-filler", "AcceptabilityJudgment", {s: "Βαγγέλης ο γύρισε σπίτι κουρασμένος."}],

    //task 3

    ["T3-C1", "AcceptabilityJudgment", {s: "Περισσότεροι άνθρωποι έχουν πάει στο Λονδίνο απ’ ότι εγώ."}],
    ["T3-C1", "AcceptabilityJudgment", {s: "Περισσότεροι άνθρωποι έχουν πάει στο Μιλάνο απ’ ότι εσύ."}],
    ["T3-C1", "AcceptabilityJudgment", {s: "Περισσότερα αγόρια έχουν πάει στο Παρίσι απ’ ότι αυτός."}],
    ["T3-C1", "AcceptabilityJudgment", {s: "Περισσότερα κορίτσια έχουν πάει στη Στοκχόλμη απ’ ότι αυτός."}],
    ["T3-C1", "AcceptabilityJudgment", {s: "Λιγότεροι άνθρωποι έχουν πάει στο Βερολίνο απ’ ότι εγώ."}],

    ["T3-C2", "AcceptabilityJudgment", {s: "Περισσότερα παιδιά έχουν τελειώσει το λύκειο απ’ ότι εγώ."}],
    ["T3-C2", "AcceptabilityJudgment", {s: "Περισσότερα παιδιά έχουν τελειώσει το σχολείο απ’ ότι εσύ."}],
    ["T3-C2", "AcceptabilityJudgment", {s: "Περισσότεροι άντρες έχουν τελειώσει το σχολείο απ’ ότι αυτός."}],
    ["T3-C2", "AcceptabilityJudgment", {s: "Περισσότεροι άντρες έχουν τελειώσει το λύκειο απ’ ότι αυτή."}],
    ["T3-C2", "AcceptabilityJudgment", {s: "Λιγότεροι άνθρωποι έχουν τελειώσει το λύκειο απ’ ότι εγώ."}],

    ["T3-filler", "AcceptabilityJudgment", {s: "Περισσότερες φορές πήγα στην Αγγλία απ’ ότι στη Γερμανία."}],
    ["T3-filler", "AcceptabilityJudgment", {s: "Περισσότερες φορές τρώω στο γραφείο μου απ’ ότι στο σπίτι μου."}],
    ["T3-filler", "AcceptabilityJudgment", {s: "Περισσότερες φορές πηγαίνω στο σινεμά απ’ ότι στο θέατρο."}],
    ["T3-filler", "AcceptabilityJudgment", {s: "Περισσότερες φορές πηγαίνουμε στη θάλασσα απ’ότι στο βουνό."}],
    ["T3-filler", "AcceptabilityJudgment", {s: "Περισσότερες φορές μαγειρεύω μόνη μου απ’ ότι με τους φίλους."}],
    ["T3-filler", "AcceptabilityJudgment", {s: "Το κλειδί εκείνων των συρταριών βρίσκονται στο μαρμάρινο τραπέζι."}],
    ["T3-filler", "AcceptabilityJudgment", {s: "Η κόρη των δασκάλων της Μαρίνας στέκονται στην αυλή του σχολείου."}],
    ["T3-filler", "AcceptabilityJudgment", {s: "To σκυλάκι των παιδιών των γειτόνων μας παίζουν ήσυχα στον κήπο τους."}],
    ["T3-filler", "AcceptabilityJudgment", {s: "Η φλόγα των κεριών στα τραπεζάκια του μπαρ τρεμόπαιζαν στο σκοτάδι."}],
    ["T3-filler", "AcceptabilityJudgment", {s: "Ο θόρυβος από τα τραγούδια των μαθητών μας δεν σταματούν ποτέ."}],
    ["T3-filler", "AcceptabilityJudgment", {s: "Τα βιβλία της κόρης του Κωνσταντίνου βρίσκεται στην βιβλιοθήκη."}],
    ["T3-filler", "AcceptabilityJudgment", {s: "H βαλίτσα των διάσημων τραγουδιστών ξεχάστηκαν μέσα στο ταξί."}],
    ["T3-filler", "AcceptabilityJudgment", {s: "Η θήκη εκείνων των φακών επαφής βρίσκονται στο πάνω συρτάρι."}],
    ["T3-filler", "AcceptabilityJudgment", {s: "Οι ηθοποιοί που ο σκηνοθέτης οδηγεί τους ακούει σιωπηλά."}],
    ["T3-filler", "AcceptabilityJudgment", {s: "Οι ποδηλάτες που ο οδηγός βλέπει κάθε Δευτέρα τους χαιρετά."}],
    ["T3-filler", "AcceptabilityJudgment", {s: "Οι μαθητές που ο δάσκαλος απέβαλλε τους έκανε παράπονο."}],
    ["T3-filler", "AcceptabilityJudgment", {s: "Οι ασθενείς που ο γιατρός κούραρε τους ευχαρίστησε πολύ θερμά."}],
    ["T3-filler", "AcceptabilityJudgment", {s: "Οι μουσικοί που ο μαέστρος διευθύνει τους ακούει προσεκτικά."}],
    ["T3-filler", "AcceptabilityJudgment", {s: "Οι κολυμβητές που ο προπονητής ανέλαβε πάντα τους ακούει."}],
    ["T3-filler", "AcceptabilityJudgment", {s: "Οι γραμματείς που ο διεθυντής προσέλαβε τους απογοήτευσε."}],




];
