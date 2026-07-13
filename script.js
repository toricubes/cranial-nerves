const nervesArray = [
    {
        number: "I",
        name: "Olfactory Nerve",
        function: "Smell",
        type: "sensory",
        location: "Forebrain",
        locationUrl: "./images/ONL4-1.png",
        impairment: "Damage can cause a loss of smell (anosmia). Is tested by asking patients to identify different scents."
    },
    {
        number: "II",
        name: "Optic Nerve",
        function: "Vision",
        type: "sensory",
        location: "Forebrain",
        locationUrl: "./images/ONL4-2.png",
        impairment: "Damage can cause visual defects including blindness or a loss of visual acuity. Is tested with a standard eye exam, including viewing the back of the eye."
    },
    {
        number: "III",
        name: "Oculomotor Nerve",
        function: "Eye movement, upper eyelid, pupil constriction",
        type: "motor",
        location: "Midbrain.",
        locationUrl: "./images/ONL4-3.png",
        impairment: "Damage can cause drooping eyelid, double vision, an eye that rests \"down and out\". Possible pupil dilation."
    },
    {
        number: "IV",
        name: "Trochlear Nerve",
        function: "Eye movement, superior oblique muscle",
        type: "motor",
        location: "Midbrain, brainstem, posterior.",
            locationUrl: "./images/ONL4-4.png",
        impairment: "Damage can lead to difficulty rotating the eye downward/inward."
    },
    {
        number: "V",
        name: "Trigeminal Nerve",
        function: "Has three branches: ophthalmic, maxillary, mandibular that divide the face into an upper, middle, and lower portion; sensation from face and chewing muscles. The Opthalmic and Maxillary branches are sensory. The Mandibular branch is both sensory and motor.",
        type: "sensory motor",
        location: "Pons. ",
        locationUrl: "./images/ONL4-5.png",
        impairment: "Damage can lead to loss of sensation in the face or inability to control the muscles in the jaw."
    },
    {
        number: "VI",
        name: "Abducens Nerve",
        function: "Eye movement, lateral rectus muscle. Abducts the eyes (Abducens <-> Abduction)",
        type: "motor",
        location: "Pons.",
        locationUrl: "./images/ONL4-6.png",
        impairment: "Damage can lead to an inability to move the eyes outward, it can lead to a condition where the eyes are constantly turned inward."
    },
    {
        number: "VII",
        name: "Facial Nerve",
        function: "Facial expression, taste from front 2/3 of tongue, control of stapedius muscle for auditory reflex.",
        type: "sensory motor",
        location: "Pons.",
        locationUrl: "./images/ONL4-7.png",
        impairment: "Damage can cause facial weakness or paralysis, loss of taste, tear production, decreased salivation, decreased taste sensation."
    },
    {
        number: "VIII",
        name: "Vestibulocochlear Nerve",
        function: "Hearing and balance. The vestibular branch supplies balance information from the vestibules and the cochlear branch suplies auditory information from the cochlea. Also called the Auditory Nerve.",
        type: "sensory",
        location: "Pons.",
        locationUrl: "./images/ONL4-8.png",
        impairment: "Damage can cause hearing loss, tinnitus, vertigo. Tested with typical hearing assessments and also vestibular tests"
    },
    {
        number: "IX",
        name: "Glossopharyngeal Nerve",
        function: "Motor: salivary gland, glands of posterior tongue, stylopharyngeous muscle. Sensory: pharynx, middle ear, rear 1/3 of tongue, carotid body and carotid sinus",
        type: "sensory motor",
        location: "Medulla Oblongata.",
        locationUrl: "./images/ONL4-9.png",
        impairment: "Damage can cause swallowing disorders and a loss of taste sensation."
    },
    {
        number: "X",
        name: "Vagus Nerve",
        function: "Large role in autonomic nervous system. Heart, lungs, gut. Regulates heartrate, breathing, digestion. Also several muscles: Cricothyroid, Levator veli palatini, Salpingopharyngeous, Palatoglossus, Palatopharyngeous, Pharyngeal Constrictors, and various Larynx muscles. Also responsible for inflammatory reflex and gag reflex.",
        type: "sensory motor",
        location: "Medulla Oblongata.",
        locationUrl: "./images/ONL4-10.png",
        impairment: "Damage disrupts the parasympathetic nervous system. It can lead to digestive issues, heart palpitations, fainting, swallowing disorders, fatigue, sleep disorders, and anxiety. Electrical vagus nerve stimulation is one possible medical intervention for severe cases."
    },
    {
        number: "XI",
        name: "Accessory Nerve",
        function: "Shoulder elevation, head turning. Sternocleidomastoid and Trapezius muscles.",
        type: "motor",
        location: "Medulla Oblongata.",
        locationUrl: "./images/ONL4-11.png",
        impairment: "Damage can cause weakness or paralysis of the sternocleidomastoid or trapezius muscles. May appear as drooping shoulder, shoulder/neck pain, or other mobility difficulties of the neck and shoulders."
    },
    {
        number: "XII",
        name: "Hypoglossal Nerve",
        function: "Tongue movement. Speech, swallowing",
        type: "motor",
        location: "Medulla Oblongata.",
        locationUrl: "./images/ONL4-12.png",
        impairment: "Damage can cause swallowing and speech disorders."
    }
]


const searchInput = $("#search-input");
const cardGrid = $("#card-grid");
const goBtn = $("#go");

// build the initial list of all 12 cranial nerves
function populateNerveCards() {
    nervesArray.forEach((nerveObj) => {
        const card = $("<div>").addClass('nerve-card').addClass('item');

        const nerveNumber = $("<span>").addClass('title').html(`CN ${nerveObj.number}`);
        const nerveName = $("<span>").addClass('name').html(`${nerveObj.name}`);
        const func = $("<span>").addClass('function').html(`<span class='first'>Function:</span> ${nerveObj.function}`);
        const loc = $("<span>").addClass('location').html(`<span class='first'>Location:</span> ${nerveObj.location}`);
        const imp = $("<span>").addClass('impairment').html(`<span class='first'>Impairment:</span> ${nerveObj.impairment}</span>`)
        const type = $("<span>").addClass('type').html(`<span class='first'>Type:</span> ${nerveObj.type}`);
        const img = $("<div>").addClass("image").html(`<img src='${nerveObj.locationUrl}'>`).css("display", "none");

        card.append(nerveNumber, nerveName, func, imp, type, img);

        card.addClass("mix")
        card.attr({
            "data-type": nerveObj.type,
            "data-function": nerveObj.function,
            "data-CN": nerveObj.number
        })

        cardGrid.append(card);
    })
}

populateNerveCards();

const mixer = mixitup(cardGrid, {
    multifilter: {
        enable: true
    }
})

$(".nerve-card").on('mouseenter', function() {
    $(this).find('.image').fadeIn({duration: 300});
})
$(".nerve-card").on('mouseleave', function() {
    $(this).find('.image').fadeOut({duration: 300});
})