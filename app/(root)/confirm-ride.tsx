import { FlatList, View } from "react-native";
import { router } from "expo-router";

import RideLayout from "@/components/RideLayout";
import DriverCard from "@/components/DriverCard";
import CustomButton from "@/components/CustomButton";
import { userDriverStore } from "@/store";

const ConfirmRide = () => {
    const { drivers, selectedDriver, setSelectedDriver } = userDriverStore()

    return (
        <RideLayout title="Choose a Driver" snapPoints={['65%', '85%']}>
            <FlatList
                data={drivers}
                renderItem={({ item }) => (
                    <DriverCard
                        selected={selectedDriver!}
                        setSelected={() => setSelectedDriver(+item.id)}
                        item={item}
                    />
                )}
                ListFooterComponent={() => (
                    <View className="mx-5 mt-10">
                        <CustomButton title="Select Ride" onPress={() => router.push("/(root)/book-ride")} />
                    </View>
                )}
            />
        </RideLayout>
    );
}

export default ConfirmRide;
