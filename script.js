const button = document.getElementById("countButton");
button.addEventListener("click", function() {  
   const newH2Letters = document.createElement('h2')
   newH2Letters.innerText = 'Letters:'
   const newLettersDiv = document.getElementById('lettersDiv')
   newLettersDiv.appendChild(newH2Letters)

   const newH2Words = document.createElement('h2')
   newH2Words.innerText = 'Words:'
   const newWordsDiv = document.getElementById('wordsDiv')
   newWordsDiv.appendChild(newH2Words)
   
   let typedText = document.getElementById("textInput").value;

   typedText = typedText.toLowerCase(); 
   
   typedText = typedText.replace(/[^a-z'\s]+/g, ""); 
   

   const letterCounts = {};
   for (let i = 0; i < typedText.length; i++) {
      currentLetter = typedText[i];
      if (letterCounts[currentLetter] === undefined) {
         letterCounts[currentLetter] = 1; 
      } else { 
         letterCounts[currentLetter]++ ; 
      }
   }

   for (let letter in letterCounts) { 
      const span = document.createElement("span"); 
      const textContent = `"${letter}": ${letterCounts[letter]}, `;
      span.innerText = textContent; 
      const letters = document.getElementById("lettersDiv");
      letters.appendChild(span); 
   }

   word = typedText.split(/\s/);

   const wordCounts = {};

   for (let i = 0; i < word.length; i++) {
      currentWord = word[i];
      if (currentWord === 'i' || currentWord === 'a') {
      } else if (wordCounts[currentWord] === undefined) {
         wordCounts[currentWord] = 1; 
      } else { 
         wordCounts[currentWord]++ ; 
      }
   }

   for (let word in wordCounts) { 
      const span = document.createElement("span"); 
      const textContent = `"${word}": ${wordCounts[word]}, `;
      span.innerText = textContent; 
      const words = document.getElementById("wordsDiv");
      words.appendChild(span); 
   }

});