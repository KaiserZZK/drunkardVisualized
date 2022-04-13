function step(){
  direction=int(random(0,4));
  switch (direction){
  case 0:
    avenue = avenue + 10; //East
    break;
  case 1:
    avenue = avenue - 10; //West
    break;
  case 2:
    street = street + 10; //North
    break;
  case 3:
    street = street - 10; //South
    break;
  }
}

