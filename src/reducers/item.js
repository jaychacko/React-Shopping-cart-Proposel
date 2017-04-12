const INIT_STATE = [
    { id: 1, title : 'Iphone 7', link : 'https://ss7.vzw.com/is/image/VerizonWireless/iphone7-plus-front-matblk?fmt=jpg&bgc=f6f6f6&resmode=sharp2&qlt=80,1&wid=352&hei=717'},
    { id: 2, title : 'Samsung s7', link : 'https://ss7.vzw.com/is/image/VerizonWireless/Samsung_Galaxy_S8_Black?fmt=jpg&bgc=f6f6f6&resmode=sharp2&qlt=80,1&wid=352&hei=717'},
    { id: 3, title : 'Nexus 6p', link : 'https://ss7.vzw.com/is/image/VerizonWireless/Google_Sailfish_Slate?fmt=jpg&bgc=f6f6f6&resmode=sharp2&qlt=80,1&wid=352&hei=717'},
    { id: 4, title : 'Nokia Lumia 735', link : 'https://ss7.vzw.com/is/image/VerizonWireless/Nokia_Lumia_735?fmt=jpg&bgc=f6f6f6&resmode=sharp2&qlt=80,1&wid=352&hei=717'},
    { id: 5, title : 'HTC Desire 530 Blue', link : 'https://ss7.vzw.com/is/image/VerizonWireless/HTC_Desire_530_Blue?fmt=jpg&bgc=f6f6f6&resmode=sharp2&qlt=80,1&wid=352&hei=717'},
    { id: 6, title : 'LG K20', link : 'https://ss7.vzw.com/is/image/VerizonWireless/LG_K20V?fmt=jpg&bgc=f6f6f6&resmode=sharp2&qlt=80,1&wid=352&hei=717'},
];

export default(state = INIT_STATE, action) => {

    switch (action.type) {

        default:
            return state;
    }

}
