import React, { useState } from "react";
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { addTask, delTask, editTask } from "../redux/todoListSlice";

const ToDoListScreen = () => {
    const [edit , setEdit] = useState(false)
    const [value , setValue] = useState('')
    const [taskItem , setTaskItem] = useState<{id:string , task:string}>({id:'',task:""})
    const dispatch = useDispatch();
    const list = useSelector(state => state.todoList);
    const onAddTask=()=> {
        let add = {
            id:Date.now().toString(36) + Math.random().toString(36).substr(2),
            task: value
        }
        dispatch(addTask(add))
        setValue('')
    }
    const onDelPressed = (id:string) => {
        dispatch(delTask(id))
    }
    const onEditPressed = (item:{id:string,task:string}) => {
        setEdit(true)
        setValue(item.task)
        setTaskItem(item)
    }
    const onUpdateTask = () => {
        let updatedTask = {...taskItem , task: value}
        
        dispatch(editTask(updatedTask))
        setValue('')
        setEdit(false)
    }
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{marginHorizontal:20,marginTop:20, gap:10,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <Input 
                placeholder="Enter task"
                value={value}
                onChangeText={newText => setValue(newText)}
                />
                <Button title={edit? "Edit Task" : "Add Task"} onPressButton={edit ? onUpdateTask : onAddTask}/>
            </View>
            {list.list.length? <FlatList 
            data={list.list}
            renderItem={({item}) => {
                return(
                    <View style={{marginHorizontal:20,flexDirection:'row',alignItems:'center', justifyContent:'space-between',padding:15,backgroundColor:'#FEF1F8',marginVertical:10}}>
                        <Text>{item.task}</Text>
                        <View style={{flexDirection:'row' , gap:16}}>
                        <TouchableOpacity onPress={() => onEditPressed(item)}>
                        <Image 
                        style={{height:25 , width: 25 , tintColor:'#F4BC1C'}}
                            source={require('./../assests/img/pencil.png')
                        }
                        />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onDelPressed(item.id)}>
                        <Image 
                        style={{height:25 , width: 25}}
                            source={require('./../assests/img/delete.png')}
                        />
                        </TouchableOpacity>
                        </View>
                    </View>
                )
            }}/> 
        : null
        }
        </SafeAreaView>
    )
}

export default ToDoListScreen