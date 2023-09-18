import styled from "styled-components";
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Filler } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, Filler, ChartDataLabels);

function Circlechart(listData) {
  // 차트 마우스호버 할때 표시되는 라벨 텍스트 데이터 셋
  // const listData = useSelector( (state) => state , shallowEqual);
  const listData2 = listData.listData
  const todotitle = [];

  const startData = [];
  const endData = [];
  const hour = [];
  const minute = [];
  const all = [];

  const addlabels = [];
  const bg = [];
  const border = [];
  
  
  const listmap = listData2.map((listData2, idx) => {
    todotitle.push(listData2.title);
    

    // 시간 데이터 재조립 및 계산
    startData.push(listData2.starttime.split(':'));
    endData.push(listData2.endtime.split(':'));

    hour.push(parseInt(endData[idx][0]) - parseInt(startData[idx][0]));
    minute.push(Math.abs(parseInt(endData[idx][1]) - parseInt(startData[idx][1])));

    all.push(hour[idx].toString() + "." + minute[idx].toString());
    switch (parseInt(listData2.tag)) {
      case 1:
        addlabels.push("Work");
        bg.push('rgba(255, 99, 132, 0.2)');
        border.push('rgba(255, 99, 132, 1)');
        break;
      case 2:
        addlabels.push("Health");
        bg.push('rgba(54, 162, 235, 0.2)');
        border.push('rgba(54, 162, 235, 1)');
        break;
      case 3:
        addlabels.push("Eat");
        bg.push('rgba(255, 206, 86, 0.2)');
        border.push('rgba(255, 206, 86, 1)');
        break;
      case 4:
        addlabels.push("Study");
        bg.push('rgba(75, 192, 192, 0.2)');
        border.push('rgba(75, 192, 192, 1)');
        break;
      case 5:
        addlabels.push("Sleep");
        bg.push('rgba(153, 102, 255, 0.2)');
        border.push('rgba(153, 102, 255, 1)');
        break;
      case 6:
        addlabels.push("Game");
        bg.push('rgba(255, 159, 64, 0.2)');
        border.push('rgba(255, 159, 64, 1)');
        break;
      default:
        break;
      }
      let result2 = Array.from(new Set(addlabels));
      return result2 
  })


  let chartdata = {
    // 차트 상단 표기 라벨
    // labels: result2,
    labels: addlabels,
    datasets: [
      {
        // 차트를 그리는 Pie값 데이터 저장
        // ps) 데이터 연결시 time으로 넘어오는 값 몇시간 간격인지 데이터 리페어 해야됨
        // 또한 데이터 없는 시간대 표시도 제작해야됨
        // ex) 00:00 ~ 02:00 => 2
        // ex2) 1번 데이터 (00:00 ~ 02:00), 2번 데이터 (03:00 ~ 04:00)
        // 1번 데이터 2번데이터 사이 (02:01 ~ 02:59) 사이의 없는 데이터 시간으로 치환

        data: all,
        backgroundColor: bg,
        borderColor: border,
        borderWidth: 2,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio : false,
    // 데이터레이블이 차트 영역밖으로 나가지 않도록 조정
    // clamp: true,
    // scales 활성화시 실시간 오류 계속 발생 좀더 정보를 찾은 후 리페어 할것?
    // scales: {
    //   yAxes: [{
    //     ticks: {
    //       beginAtZero: true
    //     }
    //   }]
    // },
    plugins: {
      legend: {
        display: false
      },
      datalabels: {
        formatter: (value,context) => {
          return addlabels[context.dataIndex];
        },
        display: 'auto',
        anchor: 'center',
        color: '#333',
        labels: addlabels,
        font: function (context) {
          const width = context.chart.width / listData2.length
          const size = Math.round(width / 12) + 15
        
          return {
            size: size,
            weight: 'bold'
          }
        }
      },
      tooltip: {
        titleFont: {
          size: 24
        },
        bodyFont: {
          size: 14
        },
        callbacks: {
          label: (context) => {
            // 배열 형식으로 텍스트 추가하여 두줄로 만듬
            let label = [];
            let idx = context.dataIndex
            let titlelabel = context.chart.data.labels
            titlelabel = []
            titlelabel.push(addlabels[idx])
            // context.parsed 가 null이 아닌 데이터이면 라벨을 다시 렌더링 하는 구간
            if (context.parsed !== null) {
              label.push(`Tag: ${addlabels[context.dataIndex]}`)
              // titlelabel = addlabels[context.dataIndex]
              label.push(`Time : ${listData2[context.dataIndex].starttime} ~ ${listData2[context.dataIndex].endtime}`);
              // todotitle[context.dataIndex] context 데이터 로그 찍어보았더니 해당 호버된 차트 index 값을 가져오는 것을 확인
              // 결과 해당 인덱스 값으로 배열에 있는 타이틀 값 가져오는데 성공
              label.push(`Title : ${todotitle[context.dataIndex]}`);
            }
            return label;
          }
        }
      }
    }
  };
  
  
  
  

  return (
    <PieChart.Wrapper>
      <PieChart.Circle>
        <Pie 
          options={options}
          data={chartdata}
          width={200} height={450}
        />
      </PieChart.Circle>
    </PieChart.Wrapper>
  );
}

export default Circlechart;

const Wrapper = styled.div`
  display:flex;
  justify-content: center;
  `
  const Circle = styled.div`
  display:flex;
  justify-content: center;
  width: 100%;
  height: 50vh;
  margin: 15px auto;
  
  // background-color: #f0f;


  @media (max-width: 900px) {
    width:100%;
    height: 25vh;
  }
`

const PieChart = {
  Wrapper,
  Circle
}