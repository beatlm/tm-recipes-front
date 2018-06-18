export class AlertConfigModel {
    title: String;
    icon: String;
    button: string;
    onClose?: Function;
}
export class AlertServiceConfigModel {
    display: boolean;
    config: AlertConfigModel;
}
