//---> Self introduction
//---> Project explanation
//---> What Container you are using in deployment
//---> How NodeJs Handle Concurrency
//---> NodeJs is single thread how it will work?
//---> How will handle CPU Intensive tasks
//---> What are the Cluster? what is Cluster Modules
//---> What are the advantages or MicroServices
//          - Faster development: Multiple teams can work on different services simultaneously.
//          - Easily Deployment: There is no dependency for one service to another service we can deploy easily.
//          - Flexibility: If we required we can use different technology for each service.
//          - Scaling:
//          - Failure Isolation: If any service down it will not impact entire application.

//---> What are the DisAdvantages of MicroService?
//          - More Complex: 
//          - Debugging is difficult
//          - Data management is difficult: Transactions - Each service have own database right, we have to revert all.
//          - Testing becomes complex
//
//---> What are the Streams?
//---> How will transaction will work in microservices?
//          - We used event-driven Saga approach.
//          - Services communicate through the events using SNS/SQS.
//          - If any service fails we can do Compensating Actions, we can trigger and rollback the previous completed services.
//
//---> Saga Patterns?
//
//---> Asked left and right join?
//      - Left Join: Keep all the records from left table and get the matched records from right table. 
//      - right join: Keep all the records from right table and get the matched records from left table.
//      - If not match it will show null values of right or left table columns.
//
//---> What is WHERE and HAVING
//         WHERE: Using this we can filter the data from the table before Group By.
//         Having: Using this we can filter the data from the table after Group By. Mostly using this for aggregate functions.
//
//----------------------------------------------------
// Agent table -> agentid,name
// Candidate table-> id, name, email, mobile, agentid
 
// Write API
 
// getCandidatesByAgentId
// getAllCandidates
// create candidate

//Entity class
@Entity('candidate')
export class Candidate{
	@PrimaryGeneratedColumn()
	id: number;
	
	@Column()
	name: string;
	
	@Column()
	email: string;
	
	@Column()
	mobile: string;
	
	@ManyToOne(() => Agent: agent => agent.candidate)
	@joinColumn({ name: 'agentId'})
 	agent: Agent;
}

export class Agent{
	@PrimaryColumn()
	agentid: number;
	
	@Column()
	name: string;
	
	@OneToMany(() => Candidate, candidate => candidate.agent)
	candidate: Candidate[];
}

// 2. DTO

export class CreateCandidataDto{
	name:string;
	email:string;
	mobile: string;
	agentId: number;
}

//3. Service:

@Injectable()
export class CandidateService{
	constructor(
		@InjectRepository(Candidate)
		
		private readonly candidataRepository:  Repository<Candidate>,
	){}
	
	async getCandidateByAgentId(agentId: number){
		return this.candidataRepository.find({
			where: { agentid},
		});
	}
	
	async getAllCandidates(){
		return this.candidataRepository.find()
	}
	
	async CreateCandidate(dto: CreateCandidataDto){
		const candidate = this.candidataRepository.create(dato);
		
		return this.candidateRepository.save(candidate);
	}
}


//controllers

@Conctoller('candidate')
export class CandidateController{
	constructor(
		private readonly candidateService: CandidateService,
	){}
	
	@Get('agent/:agentId')
	getCandidateByAgentId(
		@Param('agentId') agentId: string,
	){
		return this.candidateService.getCandidateByAgentId(agentId),
	};
	
	
	@Get()
	getAllCandidates(){
		return return this.candidateService.getAllCandidates();
	}
	
	@Post()
	CreateCandidate()
	@Body() dto: CreateCandidataDto,
	{
		return this.candidateService.CreateCandidata(dto),

	}
	
// 1)candidates can submit application to the portal and then agent will take action that
// 2) There is 3 buttons for Agent -> approve, reject, return for amendment.
 
// As candidates wants receive email notification when agent click button on return for amendment the candidate application form