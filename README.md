# pikoom :cactus:
Repo contenant tous les projets de dev de l'agence Pikoom.

# Site Web de l'Agence.

Site web vitrine permettant de présenter et mettre en avant l'agence et ses
membres, ainsi que les projets réalisés/en cours de réalisation.

## Contenu Attendu

- Présentation de l'agence.

- Présentation des client-es.

- Présentation des projets:
  - besoins du client-e.
  - objectifs à atteindre.
  - solutions apportées.

- Synthèse des choix de:
  - conception.
  - méthodes de travail.
  - moyens mis en oeuvre pour aboutir à la demande du client-e.

- Une analyse objective et synthétique:
  - des problèmes rencontrés/solutions apportées.
  - des écarts entre les plannings prévisonnels et effectifs.
  - du travail réalisé.
  - des résultats obtenus (par rapport au cahier des charges).
  - de la gestion de projet.

- Un bilan individuel ET collectif de l'expérience:
  - les plus.
  - les moins.
  - les apprentissages.
  - les préconnisations si c'était à réitérer.

- Un accès aux réalisations.

## Structure du projet

```shell

# dossier de travail: pikoom/src

.                   # Fichiers markup (index, 404, equipe, realisations, etc.)
├── js              # Tous les fichiers js du projet
├── scss            # Fichiers de style
│  ├── blocks       # Style de blocks (hero, slider, gallery, etc.)
│  └── components   # Style de composants (header, footer, navbar, button, etc.)
└── static          
   └── assets       # Style compilé, images, icônes et médias en tout genre (pdf, vidéos, etc.)
      ├── css
      ├── icons
      └── medias

```

### Commande `sass`

En se trouvant dans le dossier `src` du repo, exécuter:

```shell
sass -w scss/main.scss static/assets/css/main.css
```



<!-- ts=4 -->
