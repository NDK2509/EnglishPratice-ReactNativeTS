import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import COLORS from '../../utils/colors';
import {Task} from '../../utils/types';
import {default as CheckBox2} from '../base/CheckBox';
const styles = StyleSheet.create({
  task: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.white,
    marginBottom: 10,
    padding: 10
  },
  checkBox: {
    borderColor: COLORS.white
  }
})
const TaskListEle: React.FC<{task: Task}> = ({task}) => {
  const [checked, setChecked]= useState<boolean>(false)
  return (
    <TouchableOpacity style={styles.task}>
      <CheckBox value={checked} onChange={() => setChecked(!checked)} style={styles.checkBox}/>
      <CheckBox2 width={20} value={checked} onChange={() => setChecked(!checked)}/>
      <Text style={{color: COLORS.white}}>{task.content}</Text>
    </TouchableOpacity>
  );
};
const TaskList: React.FC<{list: Array<Task>}> = ({list}) => {
  return (
    <View>
      {list.map((task) => (
        <TaskListEle key={task.id} task={task} />
      ))}
    </View>
  );
};
export {TaskList as default, TaskListEle};
