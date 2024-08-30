import Card from "@/components/Card";
import Contador from "@/components/Contador";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        padding: '10%',
        display: 'flex',
        gap: 20,
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <Card  label={'Texto 1'}></Card>
      <Card  label={'Texto 2'}></Card>
      <Card  label={'Texto 3'}></Card>
    </View>
  );
}
