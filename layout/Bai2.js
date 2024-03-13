import { StyleSheet, ScrollView,Text, View } from 'react-native'
import React from 'react'
import { Image, TouchableOpacity } from 'react-native-web';
const CardView = ({
    title,
    imagesc,
    titleTG,
    titlePT,
    titleTime,
    tenKSText,
    titleTGMC,
    ddText,
  }) => {
    return (
  
      <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: "bold", marginBottom: 20 }}>
        Lịch Trình
      </Text>
      <View style={styles.khoi1}>
        <Text>Địa điểm
          {'\n'}
          <Text style={styles.title}>{title}</Text>
          {'\n'}
          {'\n'}
          Thời gian
          {'\n'}
          <Text style={styles.title}>{titleTG}</Text>
          {'\n'}
          {'\n'}
          Phương tiện
          {'\n'}
          <Text style={styles.title}>{titlePT}</Text>
          {'\n'}
          {'\n'}
          Thời gian
          {'\n'}
          <Text style={styles.title}>{titleTime}</Text>
          {'\n'}
          {'\n'}
          Hình ảnh
        </Text>
        <View style={[{ alignItems: 'center', justifyContent: 'center', padding: 12 }]}>
          <Image source={{ uri: imagesc }} style={{ height: 200, width: 400, borderRadius: 25 }} />
        </View>
      </View>

      {tenKSText
        ?
        <View>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              marginBottom: 20,
              marginTop: 20,
            }}
          >
            Khách Sạn
          </Text>

          <View style={styles.khoi1}>
            <Text>Tên khách sạn
              {'\n'}
            <Text style={styles.title}>{tenKSText}</Text>
            {'\n'}
            {'\n'}
            Thời gian mở cửa
            {'\n'}
            <Text style={styles.title}>{titleTGMC}</Text>
            {'\n'}
            {'\n'}
            Địa điểm
            {'\n'}
            <Text style={styles.title}>{ddText}</Text>
            {'\n'}
            {'\n'}
            <Text>Chi tiết</Text>
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
        : <View />}
    </View>
    );
  };
const Bai2 = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <CardView
          title="Phố Cổ Hội An"
          titleTG="08:00 AM - 02:00 PM, 12/08/2018"
          phuongTien="Phương tiện di chuyển"
          titlePT="Xe khách"
          titleTime="21:00 - 22:00"
          imagesc="https://dulichdemen.vn/wp-content/uploads/2023/10/pho-co-hoi-an-du-lich-de-men-vn-1536x1024.jpg"
          tenKSText="Hùng Mạnh"
          titleTGMC="08:00 AM - 12:00 AM"
          ddText="234 Quang Trung, Hội An"
          btnChiTiet="Chi Tiết"
        />
      </View>
    </ScrollView>
  )
}

export default Bai2

const styles = StyleSheet.create({container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginTop: 20
  },

  khoi1: {
    height: "auto",
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 15,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 14,
    shadowOpacity: 0.9,
    elevation: 13
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: 'center',

  },
  button: {
    padding: 10,
    backgroundColor: 'cyan',
    margin: 20,
    borderRadius: 20
  }})