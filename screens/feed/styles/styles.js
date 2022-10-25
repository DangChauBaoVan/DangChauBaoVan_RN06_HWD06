import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        backgroundColor: "#f2f2f2",
        flex: 1,
    },
    header: {
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        borderBottomColor:"#f2f2f2",
        borderBottomWidth:2,
        height:60
    },
    header__img: {
        width: 20,
        height: 20,
    },
    header__text: {
        fontSize: 18,
        fontWeight: "500",
        color: "black"
    },
    body: {
        padding: 10,
        
        width: "100%"
    },
    body__container: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 12,
        marginLeft:20,
        marginBottom: 12
    },
    body__img: {
        width: 55,
        height: 55,
        borderRadius: 35,

    },
    body__name: {
        fontSize: 16,
        fontWeight: "700",
        color: "black"
    },
    body__company: {
        fontSize: 16,
        fontWeight: "300",
    },
    avatarContainer:{
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    feedContainer:{
        borderBottomColor: "#f2f2f2",
        borderBottomWidth:2,
        padding:10
    },
    icon:{
        width:20,
        height:20
    },
    flexRow:{
        justifyContent: 'space-between',
        flexDirection:"row"
    },
    reactContainer:{
        flexDirection:"row",
    },
    reactIcon:{
        flexDirection:"row",
        marginRight:15
    },
    content:{
        marginTop:15,
        marginBottom:15
    }
})