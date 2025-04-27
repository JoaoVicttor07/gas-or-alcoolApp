import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#202020",
        alignItems: 'center',
        padding: 15
    },
    img: {
        marginTop: 50,
        marginBottom: 25
    },
    area: {
        gap: 30
    },
    textAnswer: {
        color: '#31FA5E',
        fontSize: 30,
        fontWeight: 'bold'
    },
    containerTexts: {
        alignItems: 'center',
        gap: 7
    },
    textPrices: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold'
    },
    prices: {
        color: '#fff',
        fontSize: 20,
    },
    btn: {
        borderColor: '#EF4130',
        borderWidth: 1,
        borderRadius: 3,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        width: 270
       
        
    },
    btnText: {
        color: '#ef4130',
        fontSize: 20,
        fontWeight: 'bold'
    }

})

export default styles