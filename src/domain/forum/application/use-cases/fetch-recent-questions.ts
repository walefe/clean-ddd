import { Question } from '../../enterprise/entities/question'
import { QuestionsRepository } from '../repositories/question-repository'

interface FetchRecentQuetionsUseCaseRequest {
  page: number
}

interface FetchRecentQuetionsUseCaseResponse {
  questions: Question[]
}

export class FetchRecentQuetionsUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    page,
  }: FetchRecentQuetionsUseCaseRequest): Promise<FetchRecentQuetionsUseCaseResponse> {
    const questions = await this.questionsRepository.findManyRecent({ page })
    if (!questions) throw new Error('Question not found.')

    return {
      questions,
    }
  }
}
