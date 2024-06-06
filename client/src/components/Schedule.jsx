import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, StyleSheet, Text, Dimensions, ScrollView, ActivityIndicator } from 'react-native';
import Activitie from './Activitie'; // Suponiendo que tienes un componente Activitie para mostrar cada actividad

const { width: fullWidth, height: fullHeight } = Dimensions.get('window');

export default function Calendar() {
    const [activities, setActivities] = useState([]); // Initialize as an empty array
    const [loading, setLoading] = useState(true); // Loading state

    const setFecha = (fecha) => {
        console.log('Fecha: ', fecha);
        let horas = fecha.getHours();
        let minutos = fecha.getMinutes();
        horas = horas.toString().padStart(2, '0');
        minutos = minutos.toString().padStart(2, '0');
        let horaMinutos = `${horas}:${minutos}`;
        return horaMinutos;
    }

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/v1/activities`);
            console.log("Activities: ", response.data);
            setActivities(response.data);
        } catch (error) {
            console.error("Error fetching data: ", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.calendar}>
            <View>
                <Text style={styles.title}>Cronograma</Text>
            </View>
            <Text style={styles.taskTitle}>Todas las actividades</Text>
            <ScrollView style={styles.tasks}>
                {activities.map(act => (
                    <Activitie
                        key={act.id}
                        title={act.title}
                        description={act.content}
                        start={act.start}
                        end={act.end}
                        color={"#E693B6"}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    calendar: {
        width: fullWidth,
        height: fullHeight,
        backgroundColor: '#cec1cf'
    },
    title: {
        fontSize: 45,
        marginBottom: 130,
        marginTop: 50,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'

    },
    tasks: {
        width: fullWidth,
        height: "300rem",
        backgroundColor: '#f4f4f4',
        paddingTop: 5
    },
    taskTitle: {
        fontSize: 15,
        fontWeight: '700',
        padding: 25,
        backgroundColor: '#f4f4f4',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
