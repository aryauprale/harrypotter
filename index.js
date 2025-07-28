function autoComplete(inputField, characters, suggestionBox) {
  inputField.addEventListener("input", () => {
    const input = inputField.value.toLowerCase().trim();

    //clear box if input is empty 
    if (!input) {
      suggestionBox.style.display = "none";
      return;
    }
    //filter suggestion box 
    const filterChar = characters.filter((character) => 
      character.toLowerCase().includes(input)
    );

    // show or hide suggestion box 
    if (filterChar.length > 0) {
      suggestionBox.innerHTML = filterChar
        .map((sug) => `<div>${sug}</div>`)
        .join("");
      suggestionBox.style.display = "block";

      // add click events to suggestion
      Array.from(suggestionBox.children).forEach((child) => {
        child.addEventListener("click", (event) => {
          inputField.value = event.target.textContent;
          suggestionBox.style.display = "none";
        });
      });
    } else {
        suggestionBox.innerHTML = `<div>No matches found</div>`;
        suggestionBox.style.display = "block";
    }

  });
}

//form submission
function formSubmission(formId, inputFieldIds, localStorageKey) {
  // Add event listener for the form submission
  document.getElementById(formId).addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Collect data from the input fields
    const data = {};
    inputFieldIds.forEach((fieldId) => {
      const inputValue = document.getElementById(fieldId).value.trim();
      data[fieldId] = inputValue; // Store input field value in the data object
    });

    // Store the data in localStorage under the specified key
    localStorage.setItem(localStorageKey, JSON.stringify(data));

    // Clear the input fields after submission
    inputFieldIds.forEach((fieldId) => {
      document.getElementById(fieldId).value = "";
    });

    // Display a success alert
    alert("Form Submitted");
  });
}
const characters =[
    "Harry Potter",
    "Hermione Granger",
    "Ron Weasley",
    "Albus Dumbledore",
    "Severus Snape",
    "Draco Malfoy",
    "Bellatrix Lestrange",
    "Barty Crouch",
    "Rubeus Hagrid",
    "Minerva McGonagall",
    "Ginny Weasley",
    "Fred Weasley",
    "George Weasley",
    "Percy Weasley",
    "Neville Longbottom",
    "Luna Lovegood",
    "Sirius Black",
    "Remus Lupin",
    "Bellatrix Lestrange",
    "Tom Riddle (Lord Voldemort)",
    "Molly Weasley",
    "Arthur Weasley",
    "Dobby",
    "Winky",
    "Cedric Diggory",
    "Lucius Malfoy",
    "Pansy Parkinson",
    "Cho Chang",
    "Victor Krum",
    "Nymphadora Tonks",
    "Kingsley Shacklebolt",
    "Fleur Delacour",
    "Gilderoy Lockhart",
    "Argus Filch",
    "Horace Slughorn",
    "Mad-Eye Moody",
    "Viktor Krum",
    "Barty Crouch Jr.",
    "Lily Potter",
    "James Potter",
    "Peter Pettigrew",
    "Kreacher",
    "Fenrir Greyback",
    "Dolores Umbridge",
    "Dean Thomas",
    "Seamus Finnigan",
    "Lavender Brown",
    "Parvati Patil",
    "Padma Patil",
    "Colin Creevey",
    "Lee Jordan",
    "The Weasley Twins",
    "Fred Weasley",
    "George Weasley",
    "Dean Thomas",
    "Igor Karkaroff",
    "The Grey Lady (Helena Ravenclaw)",
    "The Bloody Baron",
    "Nearly Headless Nick",
    "Moaning Myrtle",
    "The Fat Friar",
    "The Bloody Baron"
  ];
// const name = document.getelementbyid("nameofid"); characters
const fChar = document.getElementById("favchar");
const favSuggestion = document.getElementById("favCharSuggestion");
const nextSuggestion = document.getElementById("whoSuggestion");
const  whoid = document.getElementById("who");
const cForm = document.getElementById("charForm");
const fWhy = document.getElementById("why");
const fMsg = document.getElementById("msg");
const dForm = document.getElementById("contactsForm");
const gName = document.getElementById("fname");
const gMail = document.getElementById("email");
const gNum = document.getElementById("num");
const gMsg = document.getElementById("msg");


autoComplete(fChar, characters, favSuggestion );
autoComplete(whoid, characters,  nextSuggestion);
formSubmission(cForm, [fChar, whoid, fWhy, fMsg], characterData);
formSubmission(dForm, [gName, gMail, gNum, gMsg], characterData);






