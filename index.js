// code your solution here

  function superbowlWin(record){
            for (const item of record){
                if (item.result === "W"){
                    return record.find(x=>x.result==="W").year;
                }
                else if (item.result ==! "W"){
                return record.find(x=>x.result==="W");
                }
      }
}
