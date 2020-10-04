import React from 'react'
import Welcome from '../components/Welcome'
import ExerciseList from '../components/ExerciseList'
import AddButton from '../components/AddButton'
import Loading from '../components/Loading'
import FatalError from './500'

class Exercises extends React.Component{
    
    state={
            data: [],
            loading: true,
            error: null
        }


    async componentDidMount(){
        await this.fetchExercises()
    }

    fetchExercises = async () => {
        try {
            let res = await fetch('http://localhost:8000/api/exercises')
            let data = await res.json()
    
            this.setState({
                data,
                loading: false
            })
            
        } catch (error) {
            this.setState({
               loading: false,
               error
            })
        }

    }


render(){
    if(this.state.loading)
        return <Loading/>
    if(this.state.error)
        return <FatalError/>
         return(

                <div>
                    <Welcome 
                         username="Kelvin"
                    />

                    <ExerciseList
                        exercises={this.state.data}
                    />

                    <AddButton
                    
                    />

                    
                </div>
                )
        }
}

export default Exercises