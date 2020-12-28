import React from 'react';
import {
	View, 
	Image,
	StyleSheet,
	Dimensions,
	TextInput
} from 'react-native';

import { Card, Space, Row, Column, Sm, Sm2, Touchable, Price, StarRating, Btn } from '../utils';
import Icon from 'react-native-vector-icons/dist/Feather';
import config from '../../config';

const {width} = Dimensions.get('window');
const maxWidth = (width/2) - 5;

export default class ProductListItem extends React.Component{
    render(){
        return (
			<View>
            <TextInput nomargin={true} flex={0.37} align={'center'} nopadding={true}/>
			<Image
				source={{ uri: 'https://liaharahap.com/wp-content/uploads/2019/05/model-baju-lebaran-1280x720.jpg' }}
				style={{ width: 350, height: 200 }}
				/>
					<View>
                    	<Sm>Gamis Lebaran</Sm>
                    </View>
					<View>
                        <Sm>Model Baju Lebaran</Sm>
						<Sm>$200</Sm>
                    </View>
            </View>                   
                        
        )
    }
}

const styles = StyleSheet.create({
	pojok:{
		flex: 1,
		flexDirection: 'row'
	},
	Size:{
		fontSize: 15,

	},
	outer: {
		width: '100%', 
		padding: 4,
		maxWidth: maxWidth
	},
	inner: {
		shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
        backgroundColor: '#ffffff'
	},
	imageWrapper: {
		alignItems: 'center', 
		marginHorizontal: -10,
		overflow: 'hidden'
	},
	image: {
		width: '100%', 
		height: 100, 
		resizeMode: 'cover',
		borderTopLeftRadius: config.defaultBorderRadius,
		borderBottomLeftRadius: config.defaultBorderRadius,
		overflow: 'hidden'
	},
	imagePlaceholder: {
		width: 80, 
		height: 80,
		opacity: 0.7,
		resizeMode: 'cover'
	},
	detailWrapper: {
		padding: 7
	},
	title: {
		fontWeight: 'bold'
	},
	sku: {
	},
	priceWrapper: {
		flexDirection: 'row',
		flex: 1
	},
	ratingWrapper: {
		flex: 0.4
	},
	priceWrapperInner: {
		flex: 0.6,
		alignItems: 'flex-end'
	},
	price: {
		fontWeight: 'bold',
		color: '#222222',
		fontSize: 16
	},
	tariffPrice: {
		fontSize: 12,
		alignSelf: 'flex-end',
		color: '#00b0ed',
		fontWeight: 'bold'
	},
	btn: {
		marginTop: 15,
		height: 32,
        borderRadius: 16,
        backgroundColor: '#cc2122',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1
	},
	btnGrey: {
		marginTop: 15,
		height: 32,
        borderRadius: 16,
        backgroundColor: '#f9f9f9',
        alignItems: 'center',
        justifyContent: 'center'
	},
	btnText: {
		color: '#ffffff',
		fontWeight: 'bold',
		fontSize: 13
	},
	btnGreyText: {
		color: '#555555',
		fontWeight: 'bold',
		fontSize: 13
	},
	skuLine: {
		flexDirection: 'row'
	},
	skuLeft: {
		flex: 0.5
	},
	skuRight: {
		flex: 0.5,
		alignItems: 'flex-end'
	}

});

