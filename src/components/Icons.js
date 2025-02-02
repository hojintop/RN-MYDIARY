import Ionicons from '@expo/vector-icons/Ionicons';

export default (props) => {
    return(
        <Ionicons 
            name={props.name}
            size={props.size}
            color={props.color}
        />
    )
}