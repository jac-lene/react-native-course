import { View, Text, StyleSheet, Pressable } from 'react-native'

function GoalItem(props) {
    return(   
      <Pressable android_ripple={{ color: '#dddddd'}} onPress={props.onDeleteItem.bind(this, props.id)} style={({pressed}) => pressed && styles.pressedItem}>
        <View style={styles.goalItem}>
          <Text style={styles.goalText}>{props.text}</Text>
        </View>
      </Pressable>
    
)}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
      },
      goalText: {
        color: 'white',
      }
})

export default GoalItem