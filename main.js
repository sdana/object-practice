let campaignInfo = {
    congressionalDistrict: "District 5",
    platformStatements: {
        taxes: "I love taxes, tax everything", 
        jobs: "Give everyone jobs!", 
        infasctructure: "build all the things!", 
        healthcare: "Treat everyone!", 
        crimeEnforcement: "lock everyone up!"
    },
    donationURL: "http://www.voteforelizabeth.com/donate",
    calendarOfEvents: "http://www.voteforelizabeth.com/calendar",
    volunteers: [
        {name: "Bob", address: "123 4th St.", email: "bob@burgers.com", phoneNumber: "615-459-9956", availability: "M-F", activity: "polling"},
        { name: "Cheryl", address: "987 6th St.", email: "cheryl@IEatBurgers.com", phoneNumber: "615-500-1134", availability: "M-T", activity: "eating burgers" },
        { name: "Dave", address: "62 Main St.", email: "dave@theDude.com", phoneNumber: "312-999-5674", availability: "Everyday", activity: "answering phones" },
        { name: "Stan", address: "234 Elm St.", email: "Stan@buickLovers.com", phoneNumber: "615-645-2274", availability: "S-S", activity: "handing out pamphlets" },
    ],
    biography: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.",
    imageGallery: {
        headshot: "images/headshot.jpg",
        familyPhoto: "images/familyPhoto.jpg",
        constituentsPhoto: "images/constituents.jpg"
        },
    missionStatement: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.",
    voterRegUrl: "http://www.voteforelizabeth.com/register"
}
const documentBody = document.querySelector("body")

function changeObjectState(keyPath, keyToChange, stateToChange) {
    keyPath[keyToChange] = stateToChange
}

// changeObjectState(campaignInfo, "congressionalDistrict" , "District 7")
// console.log(campaignInfo.congressionalDistrict)

// console.log(campaignInfo.platformStatements.taxes)
// changeObjectState(campaignInfo.platformStatements, "taxes", "I hate taxes, tax nothing!")
// console.log(campaignInfo["platformStatements"].taxes)

// console.log(campaignInfo.volunteers[0].name)
// changeObjectState(campaignInfo.volunteers[0], "name", "Stevie Nicks")
// console.log(campaignInfo.volunteers[0].name)

let mainArticleElement = document.createElement("article")
let textElement = document.createElement("p")
for (elements in campaignInfo) {
    if (elements === "platformStatements"){
        for (insideElements in campaignInfo.platformStatements){
            textElement.innerHTML += campaignInfo.platformStatements[insideElements] + "<br><br>"
        }
    }
    if (elements === "volunteers") {
        for (i = 0; i < campaignInfo.volunteers.length; i++){
            for (insideElements in campaignInfo.volunteers[i]) {
                textElement.innerHTML += campaignInfo.volunteers[i][insideElements] + "<br><br>"
            }
        }
    }
    if (elements === "imageGallery") {
        for (insideElements in campaignInfo.imageGallery) {
            textElement.innerHTML += campaignInfo.imageGallery[insideElements] + "<br><br>"
        }
    }
    else {
        console.log(elements)
        textElement.innerHTML += campaignInfo[elements] + "<br><br>"
    }
}
mainArticleElement.setAttribute("ID", "District 5")
documentBody.appendChild(mainArticleElement)
let mainArticle = document.getElementById("District 5")
mainArticle.appendChild(textElement)
console.log(campaignInfo)

