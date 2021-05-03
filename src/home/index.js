import React from 'react';
import { Text, View, TextInput } from 'react-native';
import tailwind from 'tailwind-rn';
import { useHome } from './hook';

const inputClass = tailwind(
  'border border-blue-400 h-12 rounded-lg w-2/3 px-2 py-1 text-lg text-center'
);

const Home = () => {
  const { kj, updateKj, servings, updateServings, totalCalories } = useHome();
  return (
    <View style={tailwind('h-full w-full flex justify-center items-center')}>
      <View
        style={tailwind('w-full flex-col justify-center items-center my-12')}
      >
        <TextInput
          value={kj}
          onChange={updateKj}
          style={inputClass}
          placeholder="Kj"
        />
        <Text style={tailwind('text-gray-400 text-lg my-4')}>X</Text>
        <TextInput
          value={servings}
          onChange={updateServings}
          style={inputClass}
          placeholder="Servings"
        ></TextInput>
      </View>
      <View
        style={tailwind('w-full flex-row justify-center items-center my-12')}
      >
        <Text style={tailwind('text-lg text-gray-400 mx-3')}>Calories</Text>
        <Text style={tailwind('text-lg text-blue-400 mx-3')}>
          {totalCalories}
        </Text>
      </View>
    </View>
  );
};

export { Home };
