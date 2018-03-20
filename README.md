# SkillSet
A simple JSON format for skill sets and a mind map generator

[Demo](http://nexzhu.github.io/SkillSet/)

## Background

Initially created to help me choose technology stacks for 2015 Eleme Hackathon according to the skill sets of my teammates and me.

SkillSet can also be used to communicate skill sets and skill requirements between employers and job seekers, or to help leaders optimize assignment of tasks to teams.

SkillSet uses [Baidu FEX team](http://fex.baidu.com/)'s [Kity](https://github.com/fex-team/kity) and [KityMinder Core](https://github.com/fex-team/kityminder-core) to generate mind maps.

## Skill Levels

    1: Novice
    2: Intermediate
    3: Advanced
    4: Expert
    5: Master

## Example

### JSON

```json
{
  "name": "Nex Zhu",
  "skillset": {
    "Assembly Language": 2,
    "C#": 1,
    "C/C++": 2,
    "Dart": 1,
    "Data Mining": 2,
    "Data Store": {
      "NoSQL": {
        "MongoDB": 2,
        "Neo4j": 1,
        "Redis": 3
      },
      "RDBMS": {
        "MySQL": 2,
        "PostgreSQL": 2,
        "SQL": 2
      }
    },
    "Front-end": {
      "Angular": 1,
      "Backbone/Marionette": 3,
      "CSS": {
        ".level": 3,
        "Bootstrap": 2,
        "Foundation": 2,
        "SASS/SCSS": 2,
        "Semantic UI": 1
      },
      "HTML": 3,
      "Polymer": 1,
      "React": 2,
      "Redux": 2,
      "Underscore/Lo-Dash": 3,
      "jQuery": 3,
      "webpack": 2
    },
    "Functional Programming": 2,
    "Go": 2,
    "Java": {
      ".level": 3,
      "Dropwizard": 3,
      "Eclipse RCP": 1,
      "Hibernate": 2,
      "Spring": 2,
      "SWT": 1
    },
    "JavaScript": {
      ".level": 3,
      "CoffeeScript": 1,
      "TypeScript": 2
    },
    "Kotlin": 2,
    "Lua": 1,
    "Machine Learning": {
      ".level": 2,
      "NLP": 1
    },
    "MATLAB/Octave": 2,
    "Mobile": {
      "Android": 1,
      "Cordova": 1,
      "iOS": 1,
      "jQuery Mobile": 3
    },
    "Node.js": {
      ".level": 3,
      "Connect": 3,
      "Express": 3,
      "hapi": 2,
      "Meteor": 2,
      "Micro": 3,
      "Sails": 3,
      "Socket.IO": 2
    },
    "Objec-Oriented Programming": 3,
    "Operation": {
      "Docker": 2,
      "Linux": 2,
      "Shell script": 1,
      "Vagrant": 1
    },
    "Pascal": 2,
    "PHP": 1,
    "Python": 2,
    "Visual Basic": 1
  }
}
```

### Generated Mind Map

![skill-set.png](docs/skill-set.png)
