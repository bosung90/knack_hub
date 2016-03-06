import React, {
	Component,
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Platform,
	Image,
} from 'react-native'

// export default allows class to be referenced using import <className> from '<path>'
export default class AddEarnerProfile extends Component {
	constructor(props) {
		super(props)
		this.state = {
			firstName: undefined,
			lastName: undefined,
			description: undefined,
			email: undefined,
			cell: undefined,
			address: undefined,
		}
	}
	_popPage(){
		this.props.navigator.pop()
	}
	_pushPage(className, title) {
		this.props.navigator.push({className, title})
	}

	createUser(){
		this.props.ddpClient.call('createEarner', [{firstName: this.state.firstName, lastName: this.state.lastName, pic: '', desc: this.state.description, phone: this.state.cell}])
	}

	render() {
		return(
			<View style={styles.container}>
				<TextInput style={styles.logininput} 
					ref= 'firstName'
					placeholder='First Name'
  				placeholderTextColor='gray'
					onChangeText={(firstName) => this.setState({firstName})}
  				value={this.state.firstName} />

				<TextInput style={styles.logininput} 
					ref= 'lastName'
					placeholder='Last Name'
  				placeholderTextColor='gray'
					onChangeText={(lastName) => this.setState({lastName})}
  				value={this.state.lastName} />

  			<TextInput style={styles.logininput} 
					ref= 'description'
					placeholder='Description'
  				placeholderTextColor='gray'
					onChangeText={(description) => this.setState({description})}
  				value={this.state.description} />

				<TextInput style={styles.logininput} 
					ref= 'email'
  				placeholderTextColor='gray'
  				editable={false}
  				value={this.state.email} />
				<TextInput style={styles.logininput} 
					ref= 'cell'
					placeholder='Cell #'
  				placeholderTextColor='gray'
					onChangeText={(cell) => this.setState({cell})}
  				value={this.state.cell} />

				<TextInput style={styles.logininput} 
					ref= 'address'
					placeholder='Home Address'
  				placeholderTextColor='gray'
					onChangeText={(address) => this.setState({address})}
  				value={this.state.address} />

  			<View style={{flex:1, flexDirection: 'row', 'justifyContent': 'space-between'}}>
	  			<TouchableOpacity style={{width: 80}}>
						<Text>Cancel</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={this.createUser.bind(this)} style={{width: 80, alignItems: 'flex-end'}}>
						<Text>Save</Text>
					</TouchableOpacity>
  			</View>
			</View>
		)
	}
}

var styles = StyleSheet.create({
  container: {
  	marginTop: Platform.OS === 'ios' ? 60 : 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    alignSelf: 'center',
  },
  logininput: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'white',
    margin: 10,
    width: 150,
    height: 40
  },
});

// This line allows class to be referenced using const <className> = require('<path>')
module.exports = AddEarnerProfile 