import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import axios from 'axios';
import SwitchSZ from "../../customComponents/SwitchSZ.js";
import Checkbox from "../../customComponents/Checkbox.js";
import InPageNavigator from "../../customComponents/InPageNavigator.js";
import {Select} from "../../customComponents/Select.js";
import {AccordionItem} from "../../customComponents/AccordionItem.js";
import {Map} from "../../customComponents/Map.js";
import {image_fon2_1_link} from './assets/imageLinks.js'
import {image_Dizain_bez_nazvaniya__1___1__1_link} from './assets/imageLinks.js'
const Page_Glavnaya  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page1}    >
			<View style = {noneModeStyles._viewport}    >
				<View style = {noneModeStyles._Rectangle_42}    >
				</View>
				<View style = {noneModeStyles._fon2_1_container}    >
					<View style = {noneModeStyles._fon2_1}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_fon2_1_link}}/>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_1}    >
				</View>
				<Text style = {noneModeStyles._PLATFORM_FOR_IDEAS}   >
					PLATFORM FOR IDEAS
				</Text>
				<View style = {noneModeStyles._Frame_9}    >
					<Text style = {noneModeStyles._Registratsiya}   >
						Регистрация
					</Text>
				</View>
				<View style = {noneModeStyles._Frame_8}    >
					<Text style = {noneModeStyles._Voiti}   >
						Войти
					</Text>
				</View>
				<View style = {noneModeStyles._Frame_7}    >
					<Text style = {noneModeStyles._O_nas}   >
						О нас
					</Text>
				</View>
				<View style = {noneModeStyles._Frame_6}    >
					<Text style = {noneModeStyles._Glavnaya}   >
						Главная
					</Text>
				</View>
				<Text style = {noneModeStyles._Easy_to_communicate}   >
					Easy to communicate
				</Text>
				<View style = {noneModeStyles._Frame_10}    >
					<Text style = {noneModeStyles._READ_MORE}   >
						       {'\n'}     READ MORE
					</Text>
				</View>
				<View style = {noneModeStyles._Group_1}    >
					<View style = {noneModeStyles._Rectangle_39}    >
					</View>
					<View style = {noneModeStyles._Rectangle_40}    >
					</View>
					<View style = {noneModeStyles._Rectangle_41}    >
					</View>
				</View>
				<View style = {noneModeStyles._Dizain_bez_nazvaniya__1___1__1_container}    >
					<View style = {noneModeStyles._Dizain_bez_nazvaniya__1___1__1}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Dizain_bez_nazvaniya__1___1__1_link}}/>
					</View>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Glavnaya

const noneModeStyles = StyleSheet.create({
_page1: {
	height: 1000,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_viewport: {
	height: 1000,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Rectangle_42: {
	width: 117,
	height: 58,
	backgroundColor: "rgb(196, 196, 196)",
	position: "absolute",
	left: 1500,
	top: 29,
	},
_fon2_1_container: {
	width: 1920,
	height: 1000,
	position: "absolute",
	left: 0,
	top: 0,
	},
_fon2_1: {
	width: "100%",
	height: "100%",
	},
_Rectangle_1: {
	width: 1920,
	height: 116,
	backgroundColor: "rgba(183, 193, 193, 0.42)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_PLATFORM_FOR_IDEAS: {
	width: 1113,
	height: 134,
	position: "absolute",
	left: 36,
	top: 347,
	color: "rgb(255, 255, 255)",
	fontSize: 100,
	fontWeight: "400",
	lineHeight: 117.188,
	fontFamily: "Roboto",
	letterSpacing: 0,
	textAlign: "center",
	},
_Frame_9: {
	width: 246,
	height: 58,
	backgroundColor: "rgba(255, 255, 255, 0.5)",
	position: "absolute",
	left: 1641,
	top: 33,
	},
_Registratsiya: {
	width: 227,
	height: 44,
	position: "absolute",
	left: 9,
	top: 7,
	color: "rgb(255, 255, 255)",
	fontSize: 36,
	fontWeight: "400",
	lineHeight: 42.1875,
	fontFamily: "Roboto",
	letterSpacing: 0,
	textAlign: "left",
	},
_Frame_8: {
	width: 157,
	height: 58,
	backgroundColor: "rgba(255, 255, 255, 0.5)",
	position: "absolute",
	left: 1484,
	top: 33,
	},
_Voiti: {
	width: 109,
	height: 45,
	position: "absolute",
	left: 24,
	top: 7,
	color: "rgb(255, 255, 255)",
	fontSize: 36,
	fontWeight: "400",
	lineHeight: 42.1875,
	fontFamily: "Roboto",
	letterSpacing: 0,
	textAlign: "left",
	},
_Frame_7: {
	width: 114,
	height: 58,
	backgroundColor: "rgba(255, 255, 255, 0.5)",
	position: "absolute",
	left: 1370,
	top: 33,
	},
_O_nas: {
	width: 101,
	height: 44,
	position: "absolute",
	left: 6,
	top: 7,
	color: "rgb(255, 255, 255)",
	fontSize: 36,
	fontWeight: "400",
	lineHeight: 42.1875,
	fontFamily: "Roboto",
	letterSpacing: 0,
	textAlign: "left",
	},
_Frame_6: {
	width: 185,
	height: 58,
	backgroundColor: "rgba(255, 255, 255, 0.5)",
	position: "absolute",
	left: 1185,
	top: 33,
	},
_Glavnaya: {
	width: 148,
	height: 44,
	position: "absolute",
	left: 19,
	top: 7,
	color: "rgb(255, 255, 255)",
	fontSize: 36,
	fontWeight: "400",
	lineHeight: 42.1875,
	fontFamily: "Roboto",
	letterSpacing: 0,
	textAlign: "left",
	},
_Easy_to_communicate: {
	width: 455,
	height: 44,
	position: "absolute",
	left: 91,
	top: 484,
	color: "rgb(255, 255, 255)",
	fontSize: 30,
	fontWeight: "400",
	lineHeight: 35.1562,
	fontFamily: "Roboto",
	letterSpacing: 0,
	textAlign: "left",
	},
_Frame_10: {
	width: 244,
	height: 103,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	left: 104,
	top: 565,
	},
_READ_MORE: {
	width: 244,
	height: "auto",
	position: "absolute",
	left: 9,
	top: 0,
	color: "rgb(255, 255, 255)",
	fontSize: 28,
	fontWeight: "400",
	fontFamily: "Roboto",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_1: {
	width: 50,
	height: 66,
	position: "absolute",
	left: 1855,
	top: 128,
	},
_Rectangle_39: {
	width: 50,
	height: 14,
	backgroundColor: "rgb(25, 165, 131)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_40: {
	width: 50,
	height: 14,
	backgroundColor: "rgb(25, 165, 131)",
	position: "absolute",
	left: 0,
	top: 26,
	},
_Rectangle_41: {
	width: 50,
	height: 14,
	backgroundColor: "rgb(25, 165, 131)",
	position: "absolute",
	left: 0,
	top: 52,
	},
_Dizain_bez_nazvaniya__1___1__1_container: {
	width: 79,
	height: 89,
	position: "absolute",
	left: 52,
	top: 18,
	},
_Dizain_bez_nazvaniya__1___1__1: {
	width: "100%",
	height: "100%",
	},
})

