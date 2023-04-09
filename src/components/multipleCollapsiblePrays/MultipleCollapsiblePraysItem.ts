import { Pray, type PrayInterface } from 'src/domains/prays/interface'

export interface MultipleCollapsiblePraysItemInterface {
  prayInterface: PrayInterface
  times: number
}

class MultipleCollapsiblePraysItem {
  pray: Pray
  times: number

  constructor (props: MultipleCollapsiblePraysItemInterface) {
    this.pray = new Pray(props.prayInterface)
    this.times = props?.times
  }
}

export default MultipleCollapsiblePraysItem
