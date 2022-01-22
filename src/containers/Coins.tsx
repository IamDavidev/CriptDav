import CardCoin from "../components/cardCoin"
import { useCoins } from "../hooks/useCoins"

const Coins = () => {

    const coinsDAta = useCoins()

    return (
        <>
            <h1>
                coins
            </h1>
            <CardCoin  />
        </>
    )
}


export default Coins