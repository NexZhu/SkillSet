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

    {
      "name": "Nex Zhu",
      "skillset": {
        "Assembly Language": 2,
        "C#": 1,
        "C++": 2,
        "Dart": 1,
        "Data Store": {
          "NoSQL": {
            "MongoDB": 2,
            "Neo4j": 1,
            "Redis": 3
          },
          "RDBMS": {
            "MySQL": 2,
            "PostgreSQL": 1,
            "SQL": 2
          }
        },
        "Front-end": {
          "Angular 2.0": 2,
          "AngularJS": 2,
          "Backbone/Marionette": 3,
          "CSS": {
            ".level": 3,
            "Bootstrap": 2,
            "SASS/SCSS": 2,
            "Semantic UI": 1
          },
          "HTML": 3,
          "Polymer": 1,
          "React": 1,
          "Underscore/Lo-Dash": 3,
          "jQuery": 3,
          "webpack": 2
        },
        "Go": 2,
        "Java": {
          ".level": 3,
          "Hibernate": 2,
          "Spring": 2
        },
        "JavaScript": {
          ".level": 3,
          "CoffeeScript": 1,
          "ES6": 3,
          "Meteor": 2,
          "TypeScript": 3
        },
        "Lua": 1,
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
          "Socket.IO": 2
        },
        "Operation": {
          "Docker": 1,
          "Linux": 1,
          "Shell": 1,
          "Vagrant": 1
        },
        "Pascal": 2,
        "Python": 1,
        "Visual Basic": 1
      }
    }

### Generated Mind Map

![skill-set.png](docs/skill-set.png)
