import React, { Component } from 'react';
import {
    StatusBar,
    View,
    Image,
    StyleSheet
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const logo = require('../images/logo.png');
const menuCliente = require('../images/menu_cliente.png');
const menuContato = require('../images/menu_contato.png');
const menuEmpresa = require('../images/menu_empresa.png');
const menuServico = require('../images/menu_servico.png');

export default class CenaPrincipal extends Component {
    render() {
        return (
            <View>
                <StatusBar backgroundColor='#CCC' />
                <BarraNavegacao />
                <View style={styles.logo}>
                    <Image source={logo} />
                </View>
                <View style={styles.menu}>
                    <View style={styles.menuGrupo}>
                        <Image style={styles.menuImg} source={menuCliente} />
                        <Image style={styles.menuImg} source={menuContato} />
                    </View>
                    <View style={styles.menuGrupo}>
                        <Image style={styles.menuImg} source={menuEmpresa} />
                        <Image style={styles.menuImg} source={menuContato} />
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        marginTop: 30,
        alignItems: 'center'
    },

    menu: {
        alignItems: 'center'
    },

    menuGrupo: {

        flexDirection : 'row'
    },
    menuImg: {
        margin : 17
    }
});
