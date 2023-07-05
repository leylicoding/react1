import './DrinkButtons.css'
import Button from './ui/Button'

export const DrinkButtons = ({ drinkOne, drinkTwo }) => {
    return (
        <>
          <header>Would you like tea or coffee ? </header>
          <div className="button-group">
            <Button text={drinkOne}/>
            <Button text={drinkTwo}/>
          </div>
        </>
    )
}