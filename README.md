# La Réunion DataCup Challenge 2024 - QWERTEAM

La [Réunion DataCup Challenge](https://data.regionreunion.com/p/page-reunion-datacup-challenge) est un événement unique où toutes les compétences en manipulation de données sont mises à l’honneur : extraction, traitement, modélisation… Porté par la Région Réunion, *La Réunion DataCup Challenge* s'inscrit dans un cadre de coopération avec les producteurs de données du territoire souhaitant ouvrir, mutualiser et valoriser leurs données. Les thématiques des partenaires sont variées : de la préservation des ressources à l’économie, ou encore des préoccupations des collectivités territoriales et de leurs habitants.

L’objectif de cette seconde édition est de continuer à fédérer une communauté autour des données ouvertes du territoire ainsi qu'initier des projets pérennisables et utiles au plus grand nombre.


## QWERTEAM

Notre équipe a choisi de répondre au défi "Agent Conversationnel pour le Kap Numérik" porté par la Région Réunion, l'Union Européenne et le FEDER
Ce défi est autour du "Kap Numérik" : 
Le dispositif Kap Numérik est une aide régionale visant à accompagner les petites entreprises dans leur transformation numérique. Face à l'augmentation des demandes d'informations et pour répondre aux besoins croissants d’assistance rapide et accessible, la Région souhaite mettre en place un agent conversationnel (chatbot). Cet outil devra permettre aux entreprises de vérifier leur éligibilité au dispositif Kap Numérik et fournir des réponses à des questions d’ordre général concernant le dispositif.
L'objectif est de développer un prototype d’un assistant virtuel capable de :
- Vérifier l'éligibilité des entreprises au dispositif Kap Numérik à partir de son SIRET
- Répondre aux questions générales concernant Kap Numérik (conditions d'éligibilité, modalités de demande, etc.)

## **Documentation**

Notre solution répond au problème d'accompagnement et d'informations du Kap Numérik. Elle résout le problème des questions récurrentes et d'élligibilité de la clientèle de ce dernier. Elle consiste à proposer un agent conversationnel directement sur l'interface de la Région Réunion. Cette solution s'adresse à un pannel large de personnels allant du simple visiteur, aux chefs d'entreprises en passant par les conseillers de la Région Réunion mais aussi les professionnels préstataires.

### **Installation**

Pour démarrer le Backend : 
PRE REQUIS : PYTHON & pip

1. Récuperer les variables d'envirronement dans un fichier nommé '.env', placez ce fichier dans backend/.env
2. Dans le fichier .env écrivez 'OPENAI_API_KEY=LA_CLE_ICI' && 'ASSISTANT_ID=LA_CLE_ICI'
3. Installez les dépendances : 
    - pip install flask
    - pip install flask-cors
    - pip install openai
    - pip install python-dotenv
4. Lancez le Backend : python3 back.py

Pour démarrer le Front : 
PRE REQUIS : npm && node

1. npm install
2. npm run build
3. npm run start

### **Utilisation**

Rendez vous sur localhost:3000/ pour acceder à une page web où vous pourrez découvrir ARO en bas à droite de votre écran et intéragir avec lui pour découvrir le Kap Numérik

### **WARNING**

Nous utilisons OpenAI et son model gpt 4o (le plus performant à l'heure actuelle)
Vous serez donc limités aux crédits que nous avons fourni (environ 5€), si nécessaire, 10€ supplémentaire peuvent être débloqué sur demande en envoyant un mail à pierre-alexandre.grosset@epitech.eu

### **Contributions**

Si vous souhaitez contribuer à ce projet, merci de suivre les [recommendations](/CONTRIBUTING.md).

### **Licence**

Le code est publié sous licence [MIT](/licence.MIT).

Les données référencés dans ce README et dans le guide d'installation sont publiés sous [Etalab Licence Ouverte 2.0](/licence.etalab-2.0).
