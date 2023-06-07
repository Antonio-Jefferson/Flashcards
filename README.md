
# Flashcards 

Flashcards is a powerful learning tool consisting of flashcards with a question or statement on the front and the corresponding answer on the back. They are widely used to improve memory retention and promote effective learning through the use of Active Recall and Spaced Repetition methodologies.

## Installation

How to run the project on your machine:
```bash
  git clone git@github.com:Antonio-Jefferson/Flashcards.git
```
Open the file:
```bash
  cd folder-name
```
install the dependencies:
```bash
  npm install
```
run the project:
```bash
  npm start
````
Abra o aplicativo no navegador em http://localhost:3000
## 🛠 Skills
The Flashcards mobile site project will be implemented using the following technologies:
- HTML
- JavaScript
- Node
- React
- Styled-Component
- React-Router
- Axios
- Figma.


## Features
##### Componentization and Data
- Page elements will be componentized with React in separate files. The page's dynamic data, such as the "deck" and "flashcards", will be represented as arrays or objects in JavaScript and rendered on the screen.

##### flashcards
- All flashcards will be displayed on the screen flipped and indexed by numbers, hiding the question or term they contain. When clicking on the "play" arrow of a flashcard, the corresponding question or term will be revealed, without animations. To view the flashcard response, the user must click on the "flip" icon on the flashcard.

##### When flipping a flashcard...
- The correct answer to the question will be displayed, along with three buttons: "Didn't remember", "Almost didn't remember" and "Zap". When clicking on any of the buttons, the flashcard will be marked as answered and will have its status changed according to the user's choice:

    - Incorrect flashcard (I didn't remember)
    - Correct flashcard with effort (Almost forgot)
    - Flashcard correct immediately (Zap!)

- After being answered, the question will be closed, with its text crossed out in the color corresponding to its status and an icon. It cannot be opened again.

#### completion counter

- The counter will show how many questions the user has already answered and how many questions there are in total. Whenever a flashcard is answered (by clicking the buttons), the number of flashcards answered will be updated. The number of flashcards answered can never be greater than the total number of flashcards.

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Deploy
link: https://projeto9-zaprecall-rho-puce.vercel.app/



## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)]()
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/antjefferson/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/ant_jeff_)

