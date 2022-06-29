import React from 'react';
import { Text, View } from 'react-native';
import Slider from '@react-native-community/slider'

const marks = [
    {
        value: 0,
        label: '$0',
    },
    {
        value: 100,
        label: '$100',
    },
    {
        value: 200,
        label: '$200',
    },
    {
        value: 300,
        label: '$300',
    },
    {
        value: 400,
        label: '$400',
    },
    {
        value: 500,
        label: '$500',
    },
    {
        value: 600,
        label: '$600',
    },
    {
        value: 700,
        label: '$700',
    },
    {
        value: 800,
        label: '$800',
    },
    {
        value: 900,
        label: '$900',
    },
    {
        value: 1000,
        label: '$1000',
    },

  ];

function valuetext(value) {
    return `$${value}`;
}


const BudgetCreate = () => {
  return (
    <View
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }}>
        <Text>Create Budget</Text>

        <Slider
            aria-label="Rent"
            defaultValue={0}
            getAriaValueText={valuetext}
            step={1}
            marks={marks}
            valueLabelDisplay="auto"
        />
    </View>
  )
}
export default BudgetCreate;