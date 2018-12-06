export interface Alert {
  text: string; //title in our alert window.
  type: string; //type if our alert. It may be 'success, danger, infor'
  time: number; //life time of alert
  showCloseButton: boolean;//Show top close button
  firstButtonText?: string; //First button text
  secondButtonText?: string; //First button text
  firstButtonFunction?: Function; //First button text
  secondButtonFunction?: Function; //First button text

}
