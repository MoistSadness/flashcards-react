# flashcards-react
Easy flash card app using React + Firebase To help me study for the Security+ Exam

Found Facebook themed colors here: 
 - https://www.color-hex.com/color-palette/185
 - https://www.color-hex.com/color-palette/99155

I took the rest of the colors directly from their site.



Structure

Flash Card - an individual flashcard
Deck - A bunch of flash cards grouped together
Subject - A bunch of related decks

Flashcards should be able to be moved and/or duplicated between decks
Decks should be able to move between subjects
Users can organize cards to be in a specific order 

All data should be exportable as JSON so users can preserve their data themselves


###Data
Subject
 - id
 - title
 - description
 - decks[]

 Deck
  - id
  - subjectID (parent id)
  - title
  - description
  - cards[]

Card
 - id
 - cardID (parent id)
 - Title (side 1)
 - Answer (side 2)


Routes:
---------------------------------------
/ - homepage. 
    Show a landing page if user is not logged in
    Give user option to log in, register, or view the public flash cards


User Routes:
---------------------------------------
/{user} - The user's homepage. 
    Show some user information
    Show all subjects and their associated decks. 
    Give the option to create, read, update and delete subjects

/{user}/subject/{id} - View subject details
    Show all subjects for user
    Give the option to create, read, update and delete cards
    Drag and drop to reorder cards

/{user}/deck/{id} - View Deck details
    Show all cards in the deck
    Give the option to create, read, update and delete cards
    Drag and drop to reorder cards


Public routes:
---------------------------------------
/public - View all public flashcard sets


/quiz - run a quiz 