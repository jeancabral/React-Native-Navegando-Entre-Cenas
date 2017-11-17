import React, { Component } from 'react';
import {
    StatusBar,
    View,
    Image,
    StyleSheet,
    Text
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheCliente = require('../images/detalhe_cliente.png');
const cliente1 = require('../images/cliente1.png');
const cliente2 = require('../images/cliente2.png');

export default class CenaClientes extends Component {
    render() {
        return (
            <View>
                <StatusBar backgroundColor='#B9C941' />
                <BarraNavegacao />
                <View style={styles.cabecalho}>
                    <Image source={detalheCliente} />
                    <Text style={styles.txtTitulo}>Nossos Clientes</Text>
                </View>

                <View style={styles.detalheCliente}>
                    <Image source={cliente1} />
                    <Text style={styles.txtDetalheCliente}>Lorem Ipsum dolorem</Text>
                </View>

                <View style={styles.detalheCliente}>
                    <Image source={cliente2} />
                    <Text style={styles.txtDetalheCliente}>Lorem Ipsum dolorem</Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    cabecalho: {
        marginTop: 20,
        alignItems: 'center',
        flexDirection : 'row'
    },

    txtTitulo: {
        color: '#B9C941',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15,
        marginLeft: 10
    },
    detalheCliente: {
        padding: 10,
        marginTop: 15
    },

    txtDetalheCliente : {
        fontSize: 18,
        marginLeft: 20
    }
});
