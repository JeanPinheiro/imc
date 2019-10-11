import React, {Component} from 'react'
import './Imc.css'
import Resultado from './Resultado'

const initialState ={
    result: 'Digite seus dados para o calculo',
    weight: 0,
    height: 0,
    condition: ''

}

export default class Imc extends Component {
    
    state = { ...initialState}

    constructor(props){
        super(props)

        this.updateWeight = this.updateWeight.bind(this)
        this.updateHeight = this.updateHeight.bind(this)
        this.clear = this.clear.bind(this)
        this.calculate = this.calculate.bind(this)
    }

    clear(){
        this.setState({ ...initialState});
        this.refs.weight.value = '';
        this.refs.height.value = '';
        
    }

    updateWeight(event){
        this.setState({weight: event.target.value})
    }
    updateHeight(event){
        this.setState({height: event.target.value})
    }

    calculate(){
        const weight = parseFloat(this.state.weight)
        const height = parseFloat(this.state.height)
        const imc = (weight / (height**2))
        let condition = ''
       
        if ( imc < 17 ){
        condition = 'Muito abaixo do peso'
        }               
        else if ( 17 < imc && imc < 18.49 ){
        condition = 'Abaixo do peso'
        }
        else if ( 18.5 < imc && imc < 24.99 ){
        condition = 'Peso Normal'
        }
        else if ( 25 < imc && imc < 29.99 ){
        condition = 'Acima do peso'
        }
        else if ( 30 < imc && imc < 34.99 ){
        condition = 'Obesidade I'
        }
        else if ( 35 < imc && imc < 39.99 ){
        condition = 'Obesidade II'
        }
        else if (  imc > 40 ){
        condition = 'Obesidade III (mórbida)'
        }

        const cond = condition
        let result = "Seu IMC é: " + imc.toFixed(2)
        condition =  ' Sua condição: ' + condition
        this.setState({result: result, condition: condition})
        
    }
    
    render(){
      return(
          <div className="imc">
              <Resultado result={this.state.result} condition={this.state.condition} />
              <input type="text" onChange={this.updateWeight} placeholder="Digite seu peso (kg)" ref="weight" />
              <input type="text" onChange={this.updateHeight} placeholder="Digite sua altura (metros)" ref="height"/>
              
              <button onClick={this.clear}>Limpar</button>
              <button onClick={this.calculate} >Calcular</button>
          </div>
          
      )   
    }
}