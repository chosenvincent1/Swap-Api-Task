const axios = require('axios');
const { response } = require('express');

const URL = 'https://swapi.dev/api';

const swapiCtrl = {
    swapi: async(req, res)=> {
        try {
            
        const people = await axios.get(URL + '/people/');

        const allPeople = (people.data.results)

        const checkPerson = await allPeople.filter((person)=>{
            return person.name === "Darth Vader"
        })

        // res.json({checkPerson})



        //To the number of people on the starship

        const starships = (URL + '/starships');


        const getStarships = await axios.get(starships);
        

        const allStarships = (getStarships.data.results)

        const checkStarship = await allStarships.filter((starhip)=> {
            return starhip.name === 'Death Star'
        })


        let crewMembers;

        if(checkStarship){
            crewMembers = checkStarship[0].crew
        } else{
            crewMembers = 0;
        }
        

        //Check if Princess Leia is on planet Alderaan
        const checkPrincessLeia = await allPeople.filter((princess)=>{
            return princess.name == "Leia Organa"
        })

        const princessLeiaHomeUrl = checkPrincessLeia[0].homeworld

        const allPlanets = await axios.get(princessLeiaHomeUrl)

        const princessLeiaPlanet = (allPlanets.data)


        let princessLeiaOnAlderaan;

        if(princessLeiaPlanet.name == "Alderaan"){
            princessLeiaOnAlderaan = true
        }else{
            princessLeiaOnAlderaan = false
        }
        

        //Result
        const results = {
            starship : {
    
              name: checkStarship[0].name,
              model: checkStarship[0].model
            },
            crew: crewMembers,
            isLeiaOnPlanet: princessLeiaOnAlderaan
          }
    
          return res.status(200).json(results)
        

    
        } catch (error) { 
            console.log(error)
        }
    }
}

module.exports = swapiCtrl