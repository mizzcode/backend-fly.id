import type { TransactionsModel } from '../models/transactions'
import { TransactionRepository } from '../repository/transactions'

export class TransactionService {
  readonly transactionRepository: TransactionRepository

  public constructor() {
    this.transactionRepository = new TransactionRepository()
  }

  public getReportTransaction = async (): Promise<TransactionsModel[]> => {
    return await this.transactionRepository.findReportTransaction()
  }

  public getTheMostSoldoutAirlines = async (): Promise<TransactionsModel[]> => {
    return await this.transactionRepository.findTheMostSoldoutAirlines()
  }

  public getTheMostSoldoutAirplanes = async (): Promise<TransactionsModel[]> => {
    return await this.transactionRepository.findTheMostSoldoutAirplanes()
  }
}
