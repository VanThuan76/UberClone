import { Text, View } from "react-native";
import { router } from "expo-router";
import { userLocationStore } from "@/store";
import { icons } from "@/constants";

import RideLayout from "@/components/RideLayout";
import GoogleTextInput from "@/components/GoogleTextInput";
import CustomButton from "@/components/CustomButton";

const FindRide = () => {
    const { userAddress, destinationAddress, setDestinationLocation, setUserLocation } = userLocationStore()

    return (
        <RideLayout title="Ride" snapPoints={['85%']} >
            <View className="my-3">
                <Text className="mb-3 text-lg font-JakartaBold">From</Text>
                <GoogleTextInput
                    icon={icons.target}
                    initialLocation={userAddress!}
                    containerStyle="bg-neutral-100"
                    textInputBackgroundColor="#f5f5f5"
                    handlePress={(location) => setUserLocation(location)}
                />
            </View>

            <View className="my-3">
                <Text className="mb-3 text-lg font-JakartaBold">To</Text>
                <GoogleTextInput
                    icon={icons.map}
                    initialLocation={destinationAddress!}
                    containerStyle="bg-neutral-100"
                    textInputBackgroundColor="transparent"
                    handlePress={(location) => setUserLocation(location)}
                />
            </View>

            <CustomButton
                title="Find now"
                onPress={() => router.push("/(root)/confirm-ride")}
                className="mt-5"
            />
        </RideLayout>
    );
}

export default FindRide;
