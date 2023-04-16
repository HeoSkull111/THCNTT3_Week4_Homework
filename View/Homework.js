import React,  {useState} from 'react';
import { Text, View, StyleSheet, Switch } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Homework = ({params,}) => {
    const [light, setLights] = useState(false);
    const [fan, setFan] = useState(false);
    const [television, setTelevision] = useState(false);
    return  (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.txtTitle}> SMART HOME </Text>
                <Text style={styles.txtSubTitle}> Living Room </Text>
            </View>

            <View style={styles.main}>
                    <View style={styles.item}> {   
                        light == false ? <Icon name="lightbulb" color={"grey"} size={66}/> : <Icon name="lightbulb" color={"#FFAE19"} size={66}/>
                    } 
                        <Text style={styles.txtItem}> Lights </Text>
                        <Switch value={light} onValueChange={()=> setLights(!light)}
                        trackColor={{ false: '#767577', true: '#2688D6'}}
                        thumbColor={light ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"   
                        style={styles.toggleSwitch}/>
                    </View>

                    <View style={styles.item}> {
                        fan == false ? <Icon name="fan" color={"grey"} size={66}/> : <Icon name="fan" color={"#FFAE19"} size={66}/>
                    }
                        <Text style={styles.txtItem}> Fans </Text>
                        <Switch value={fan} onValueChange={()=> setFan(!fan)}
                        trackColor={{ false: '#767577', true: '#2688D6' }}
                        thumbColor={fan ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"   
                        style={styles.toggleSwitch}/>
                    </View>

                    <View style={styles.item}> {
                        television == false ? <FontAwesome name="television" color={"grey"} size={66}/> : <FontAwesome name="television" color={"#FFAE19"} size={66}/>
                    }
                        <Text style={styles.txtItem}> TV </Text>
                        <Switch value={television} onValueChange={()=> setTelevision(!television)}
                        trackColor={{ false: '#767577', true: '#2688D6' }}
                        thumbColor={television ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"   
                        style={styles.toggleSwitch}/>
                    </View>
            </View>

            <View style={styles.footer}>
                <Text style={styles.txtSubTitle}> THCNTT - Wemos D1 Sample</Text>
            </View>
        </View>
    );
} 

const styles = StyleSheet.create({

    container: {
        flex: 1,
            backgroundColor: '#424242',
            justifyContent: 'flex-start',
        },
    header: {
        flex: 1,
        alignItems:'center',
    },
    footer: {
        flex: 1,
        alignItems:'center',
    },
    txtTitle: {
        fontSize: 40,
        fontStyle: 'bold',
        color: '#BA502F',
    },
    txtSubTitle: {
        fontSize: 20,
        fontStyle: 'bold',
        color: '#FFF',
    },
    txtItem: {
        fontSize: 30,
        fontStyle: 'bold',
        color: '#424242',
        flex: 1,
        marginLeft: 30
    },
    main: {
        flex: 5,
        alignItems: 'center',
        padding: 15,
    },
    item: {
        borderRadius: 10,
        height: 100,
        width: '100%',
        backgroundColor: '#eeeeee',
        marginBottom:5,
        marginTop:5,
        alignItems:'center',
        flexDirection: 'row',
        padding: 5
    },

    toggleSwitch: {
        height: 40
    }
    
});

export default Homework;
