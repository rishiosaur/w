export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K]
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: number
	String: string
	Boolean: boolean
	Int: number
	Float: number
	Date: any
	DateTime: any
	JSON: any
	Long: any
	Time: any
	Upload: any
}

export type AdminUser = {
	__typename?: 'AdminUser'
	id: Scalars['ID']
	username?: Maybe<Scalars['String']>
	firstname: Scalars['String']
	lastname: Scalars['String']
}

export type Article = {
	__typename?: 'Article'
	id: Scalars['ID']
	created_at: Scalars['DateTime']
	updated_at: Scalars['DateTime']
	title?: Maybe<Scalars['String']>
	description: Scalars['String']
	content: Scalars['String']
	likes: Scalars['Int']
	bg: Scalars['String']
	categories?: Maybe<Array<Maybe<Category>>>
	projects?: Maybe<Array<Maybe<Project>>>
}

export type ArticleCategoriesArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
}

export type ArticleProjectsArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
}

export type ArticleAggregator = {
	__typename?: 'ArticleAggregator'
	count?: Maybe<Scalars['Int']>
	totalCount?: Maybe<Scalars['Int']>
	sum?: Maybe<ArticleAggregatorSum>
	avg?: Maybe<ArticleAggregatorAvg>
	min?: Maybe<ArticleAggregatorMin>
	max?: Maybe<ArticleAggregatorMax>
}

export type ArticleAggregatorAvg = {
	__typename?: 'ArticleAggregatorAvg'
	likes?: Maybe<Scalars['Float']>
}

export type ArticleAggregatorMax = {
	__typename?: 'ArticleAggregatorMax'
	likes?: Maybe<Scalars['Float']>
}

export type ArticleAggregatorMin = {
	__typename?: 'ArticleAggregatorMin'
	likes?: Maybe<Scalars['Float']>
}

export type ArticleAggregatorSum = {
	__typename?: 'ArticleAggregatorSum'
	likes?: Maybe<Scalars['Float']>
}

export type ArticleConnection = {
	__typename?: 'ArticleConnection'
	values?: Maybe<Array<Maybe<Article>>>
	groupBy?: Maybe<ArticleGroupBy>
	aggregate?: Maybe<ArticleAggregator>
}

export type ArticleConnectionBg = {
	__typename?: 'ArticleConnectionBg'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<ArticleConnection>
}

export type ArticleConnectionContent = {
	__typename?: 'ArticleConnectionContent'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<ArticleConnection>
}

export type ArticleConnectionCreated_At = {
	__typename?: 'ArticleConnectionCreated_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<ArticleConnection>
}

export type ArticleConnectionDescription = {
	__typename?: 'ArticleConnectionDescription'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<ArticleConnection>
}

export type ArticleConnectionId = {
	__typename?: 'ArticleConnectionId'
	key?: Maybe<Scalars['ID']>
	connection?: Maybe<ArticleConnection>
}

export type ArticleConnectionLikes = {
	__typename?: 'ArticleConnectionLikes'
	key?: Maybe<Scalars['Int']>
	connection?: Maybe<ArticleConnection>
}

export type ArticleConnectionTitle = {
	__typename?: 'ArticleConnectionTitle'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<ArticleConnection>
}

export type ArticleConnectionUpdated_At = {
	__typename?: 'ArticleConnectionUpdated_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<ArticleConnection>
}

export type ArticleGroupBy = {
	__typename?: 'ArticleGroupBy'
	id?: Maybe<Array<Maybe<ArticleConnectionId>>>
	created_at?: Maybe<Array<Maybe<ArticleConnectionCreated_At>>>
	updated_at?: Maybe<Array<Maybe<ArticleConnectionUpdated_At>>>
	title?: Maybe<Array<Maybe<ArticleConnectionTitle>>>
	description?: Maybe<Array<Maybe<ArticleConnectionDescription>>>
	content?: Maybe<Array<Maybe<ArticleConnectionContent>>>
	likes?: Maybe<Array<Maybe<ArticleConnectionLikes>>>
	bg?: Maybe<Array<Maybe<ArticleConnectionBg>>>
}

export type ArticleInput = {
	title?: Maybe<Scalars['String']>
	description: Scalars['String']
	content: Scalars['String']
	likes?: Maybe<Scalars['Int']>
	categories?: Maybe<Array<Maybe<Scalars['ID']>>>
	projects?: Maybe<Array<Maybe<Scalars['ID']>>>
	bg: Scalars['String']
	created_by?: Maybe<Scalars['ID']>
	updated_by?: Maybe<Scalars['ID']>
}

export type Author = {
	__typename?: 'Author'
	id: Scalars['ID']
	created_at: Scalars['DateTime']
	updated_at: Scalars['DateTime']
	name: Scalars['String']
	description: Scalars['String']
	pfp: Scalars['String']
	email: Scalars['String']
	bg: Scalars['String']
}

export type AuthorAggregator = {
	__typename?: 'AuthorAggregator'
	count?: Maybe<Scalars['Int']>
	totalCount?: Maybe<Scalars['Int']>
}

export type AuthorConnection = {
	__typename?: 'AuthorConnection'
	values?: Maybe<Array<Maybe<Author>>>
	groupBy?: Maybe<AuthorGroupBy>
	aggregate?: Maybe<AuthorAggregator>
}

export type AuthorConnectionBg = {
	__typename?: 'AuthorConnectionBg'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<AuthorConnection>
}

export type AuthorConnectionCreated_At = {
	__typename?: 'AuthorConnectionCreated_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<AuthorConnection>
}

export type AuthorConnectionDescription = {
	__typename?: 'AuthorConnectionDescription'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<AuthorConnection>
}

export type AuthorConnectionEmail = {
	__typename?: 'AuthorConnectionEmail'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<AuthorConnection>
}

export type AuthorConnectionId = {
	__typename?: 'AuthorConnectionId'
	key?: Maybe<Scalars['ID']>
	connection?: Maybe<AuthorConnection>
}

export type AuthorConnectionName = {
	__typename?: 'AuthorConnectionName'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<AuthorConnection>
}

export type AuthorConnectionPfp = {
	__typename?: 'AuthorConnectionPfp'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<AuthorConnection>
}

export type AuthorConnectionUpdated_At = {
	__typename?: 'AuthorConnectionUpdated_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<AuthorConnection>
}

export type AuthorGroupBy = {
	__typename?: 'AuthorGroupBy'
	id?: Maybe<Array<Maybe<AuthorConnectionId>>>
	created_at?: Maybe<Array<Maybe<AuthorConnectionCreated_At>>>
	updated_at?: Maybe<Array<Maybe<AuthorConnectionUpdated_At>>>
	name?: Maybe<Array<Maybe<AuthorConnectionName>>>
	description?: Maybe<Array<Maybe<AuthorConnectionDescription>>>
	pfp?: Maybe<Array<Maybe<AuthorConnectionPfp>>>
	email?: Maybe<Array<Maybe<AuthorConnectionEmail>>>
	bg?: Maybe<Array<Maybe<AuthorConnectionBg>>>
}

export type AuthorInput = {
	name: Scalars['String']
	description: Scalars['String']
	pfp: Scalars['String']
	email: Scalars['String']
	bg: Scalars['String']
	created_by?: Maybe<Scalars['ID']>
	updated_by?: Maybe<Scalars['ID']>
}

export enum CacheControlScope {
	Public = 'PUBLIC',
	Private = 'PRIVATE',
}

export type Category = {
	__typename?: 'Category'
	id: Scalars['ID']
	created_at: Scalars['DateTime']
	updated_at: Scalars['DateTime']
	name: Scalars['String']
	description: Scalars['String']
	projects?: Maybe<Array<Maybe<Project>>>
	articles?: Maybe<Array<Maybe<Article>>>
}

export type CategoryProjectsArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
}

export type CategoryArticlesArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
}

export type CategoryAggregator = {
	__typename?: 'CategoryAggregator'
	count?: Maybe<Scalars['Int']>
	totalCount?: Maybe<Scalars['Int']>
}

export type CategoryConnection = {
	__typename?: 'CategoryConnection'
	values?: Maybe<Array<Maybe<Category>>>
	groupBy?: Maybe<CategoryGroupBy>
	aggregate?: Maybe<CategoryAggregator>
}

export type CategoryConnectionCreated_At = {
	__typename?: 'CategoryConnectionCreated_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<CategoryConnection>
}

export type CategoryConnectionDescription = {
	__typename?: 'CategoryConnectionDescription'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<CategoryConnection>
}

export type CategoryConnectionId = {
	__typename?: 'CategoryConnectionId'
	key?: Maybe<Scalars['ID']>
	connection?: Maybe<CategoryConnection>
}

export type CategoryConnectionName = {
	__typename?: 'CategoryConnectionName'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<CategoryConnection>
}

export type CategoryConnectionUpdated_At = {
	__typename?: 'CategoryConnectionUpdated_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<CategoryConnection>
}

export type CategoryGroupBy = {
	__typename?: 'CategoryGroupBy'
	id?: Maybe<Array<Maybe<CategoryConnectionId>>>
	created_at?: Maybe<Array<Maybe<CategoryConnectionCreated_At>>>
	updated_at?: Maybe<Array<Maybe<CategoryConnectionUpdated_At>>>
	name?: Maybe<Array<Maybe<CategoryConnectionName>>>
	description?: Maybe<Array<Maybe<CategoryConnectionDescription>>>
}

export type CategoryInput = {
	name: Scalars['String']
	description: Scalars['String']
	projects?: Maybe<Array<Maybe<Scalars['ID']>>>
	articles?: Maybe<Array<Maybe<Scalars['ID']>>>
	created_by?: Maybe<Scalars['ID']>
	updated_by?: Maybe<Scalars['ID']>
}

export type CreateArticleInput = {
	data?: Maybe<ArticleInput>
}

export type CreateArticlePayload = {
	__typename?: 'createArticlePayload'
	article?: Maybe<Article>
}

export type CreateAuthorInput = {
	data?: Maybe<AuthorInput>
}

export type CreateAuthorPayload = {
	__typename?: 'createAuthorPayload'
	author?: Maybe<Author>
}

export type CreateCategoryInput = {
	data?: Maybe<CategoryInput>
}

export type CreateCategoryPayload = {
	__typename?: 'createCategoryPayload'
	category?: Maybe<Category>
}

export type CreateProjectInput = {
	data?: Maybe<ProjectInput>
}

export type CreateProjectPayload = {
	__typename?: 'createProjectPayload'
	project?: Maybe<Project>
}

export type CreateRoleInput = {
	data?: Maybe<RoleInput>
}

export type CreateRolePayload = {
	__typename?: 'createRolePayload'
	role?: Maybe<UsersPermissionsRole>
}

export type CreateUserInput = {
	data?: Maybe<UserInput>
}

export type CreateUserPayload = {
	__typename?: 'createUserPayload'
	user?: Maybe<UsersPermissionsUser>
}

export type DeleteArticleInput = {
	where?: Maybe<InputId>
}

export type DeleteArticlePayload = {
	__typename?: 'deleteArticlePayload'
	article?: Maybe<Article>
}

export type DeleteAuthorInput = {
	where?: Maybe<InputId>
}

export type DeleteAuthorPayload = {
	__typename?: 'deleteAuthorPayload'
	author?: Maybe<Author>
}

export type DeleteCategoryInput = {
	where?: Maybe<InputId>
}

export type DeleteCategoryPayload = {
	__typename?: 'deleteCategoryPayload'
	category?: Maybe<Category>
}

export type DeleteFeaturedPayload = {
	__typename?: 'deleteFeaturedPayload'
	featured?: Maybe<Featured>
}

export type DeleteProjectInput = {
	where?: Maybe<InputId>
}

export type DeleteProjectPayload = {
	__typename?: 'deleteProjectPayload'
	project?: Maybe<Project>
}

export type DeleteRoleInput = {
	where?: Maybe<InputId>
}

export type DeleteRolePayload = {
	__typename?: 'deleteRolePayload'
	role?: Maybe<UsersPermissionsRole>
}

export type DeleteUserInput = {
	where?: Maybe<InputId>
}

export type DeleteUserPayload = {
	__typename?: 'deleteUserPayload'
	user?: Maybe<UsersPermissionsUser>
}

export type EditArticleInput = {
	title?: Maybe<Scalars['String']>
	description?: Maybe<Scalars['String']>
	content?: Maybe<Scalars['String']>
	likes?: Maybe<Scalars['Int']>
	categories?: Maybe<Array<Maybe<Scalars['ID']>>>
	projects?: Maybe<Array<Maybe<Scalars['ID']>>>
	bg?: Maybe<Scalars['String']>
	created_by?: Maybe<Scalars['ID']>
	updated_by?: Maybe<Scalars['ID']>
}

export type EditAuthorInput = {
	name?: Maybe<Scalars['String']>
	description?: Maybe<Scalars['String']>
	pfp?: Maybe<Scalars['String']>
	email?: Maybe<Scalars['String']>
	bg?: Maybe<Scalars['String']>
	created_by?: Maybe<Scalars['ID']>
	updated_by?: Maybe<Scalars['ID']>
}

export type EditCategoryInput = {
	name?: Maybe<Scalars['String']>
	description?: Maybe<Scalars['String']>
	projects?: Maybe<Array<Maybe<Scalars['ID']>>>
	articles?: Maybe<Array<Maybe<Scalars['ID']>>>
	created_by?: Maybe<Scalars['ID']>
	updated_by?: Maybe<Scalars['ID']>
}

export type EditFeaturedInput = {
	articles?: Maybe<Array<Maybe<Scalars['ID']>>>
	projects?: Maybe<Array<Maybe<Scalars['ID']>>>
	created_by?: Maybe<Scalars['ID']>
	updated_by?: Maybe<Scalars['ID']>
}

export type EditFileInput = {
	name?: Maybe<Scalars['String']>
	alternativeText?: Maybe<Scalars['String']>
	caption?: Maybe<Scalars['String']>
	width?: Maybe<Scalars['Int']>
	height?: Maybe<Scalars['Int']>
	formats?: Maybe<Scalars['JSON']>
	hash?: Maybe<Scalars['String']>
	ext?: Maybe<Scalars['String']>
	mime?: Maybe<Scalars['String']>
	size?: Maybe<Scalars['Float']>
	url?: Maybe<Scalars['String']>
	previewUrl?: Maybe<Scalars['String']>
	provider?: Maybe<Scalars['String']>
	provider_metadata?: Maybe<Scalars['JSON']>
	related?: Maybe<Array<Maybe<Scalars['ID']>>>
	created_by?: Maybe<Scalars['ID']>
	updated_by?: Maybe<Scalars['ID']>
}

export type EditProjectInput = {
	title?: Maybe<Scalars['String']>
	content?: Maybe<Scalars['String']>
	categories?: Maybe<Array<Maybe<Scalars['ID']>>>
	github?: Maybe<Scalars['String']>
	url?: Maybe<Scalars['String']>
	likes?: Maybe<Scalars['Int']>
	media?: Maybe<Scalars['JSON']>
	bg?: Maybe<Scalars['String']>
	preview?: Maybe<Scalars['String']>
	articles?: Maybe<Array<Maybe<Scalars['ID']>>>
	created_by?: Maybe<Scalars['ID']>
	updated_by?: Maybe<Scalars['ID']>
}

export type EditRoleInput = {
	name?: Maybe<Scalars['String']>
	description?: Maybe<Scalars['String']>
	type?: Maybe<Scalars['String']>
	permissions?: Maybe<Array<Maybe<Scalars['ID']>>>
	users?: Maybe<Array<Maybe<Scalars['ID']>>>
	created_by?: Maybe<Scalars['ID']>
	updated_by?: Maybe<Scalars['ID']>
}

export type EditUserInput = {
	username?: Maybe<Scalars['String']>
	email?: Maybe<Scalars['String']>
	provider?: Maybe<Scalars['String']>
	password?: Maybe<Scalars['String']>
	resetPasswordToken?: Maybe<Scalars['String']>
	confirmed?: Maybe<Scalars['Boolean']>
	blocked?: Maybe<Scalars['Boolean']>
	role?: Maybe<Scalars['ID']>
	created_by?: Maybe<Scalars['ID']>
	updated_by?: Maybe<Scalars['ID']>
}

export type Featured = {
	__typename?: 'Featured'
	id: Scalars['ID']
	created_at: Scalars['DateTime']
	updated_at: Scalars['DateTime']
	articles?: Maybe<Array<Maybe<Article>>>
	projects?: Maybe<Array<Maybe<Project>>>
}

export type FeaturedArticlesArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
}

export type FeaturedProjectsArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
}

export type FeaturedInput = {
	articles?: Maybe<Array<Maybe<Scalars['ID']>>>
	projects?: Maybe<Array<Maybe<Scalars['ID']>>>
	created_by?: Maybe<Scalars['ID']>
	updated_by?: Maybe<Scalars['ID']>
}

export type FileInfoInput = {
	name?: Maybe<Scalars['String']>
	alternativeText?: Maybe<Scalars['String']>
	caption?: Maybe<Scalars['String']>
}

export type FileInput = {
	name: Scalars['String']
	alternativeText?: Maybe<Scalars['String']>
	caption?: Maybe<Scalars['String']>
	width?: Maybe<Scalars['Int']>
	height?: Maybe<Scalars['Int']>
	formats?: Maybe<Scalars['JSON']>
	hash: Scalars['String']
	ext?: Maybe<Scalars['String']>
	mime: Scalars['String']
	size: Scalars['Float']
	url: Scalars['String']
	previewUrl?: Maybe<Scalars['String']>
	provider: Scalars['String']
	provider_metadata?: Maybe<Scalars['JSON']>
	related?: Maybe<Array<Maybe<Scalars['ID']>>>
	created_by?: Maybe<Scalars['ID']>
	updated_by?: Maybe<Scalars['ID']>
}

export type InputId = {
	id: Scalars['ID']
}

export type Morph =
	| UsersPermissionsMe
	| UsersPermissionsMeRole
	| UsersPermissionsLoginPayload
	| UserPermissionsPasswordPayload
	| Article
	| ArticleConnection
	| ArticleAggregator
	| ArticleAggregatorSum
	| ArticleAggregatorAvg
	| ArticleAggregatorMin
	| ArticleAggregatorMax
	| ArticleGroupBy
	| ArticleConnectionId
	| ArticleConnectionCreated_At
	| ArticleConnectionUpdated_At
	| ArticleConnectionTitle
	| ArticleConnectionDescription
	| ArticleConnectionContent
	| ArticleConnectionLikes
	| ArticleConnectionBg
	| CreateArticlePayload
	| UpdateArticlePayload
	| DeleteArticlePayload
	| Author
	| AuthorConnection
	| AuthorAggregator
	| AuthorGroupBy
	| AuthorConnectionId
	| AuthorConnectionCreated_At
	| AuthorConnectionUpdated_At
	| AuthorConnectionName
	| AuthorConnectionDescription
	| AuthorConnectionPfp
	| AuthorConnectionEmail
	| AuthorConnectionBg
	| CreateAuthorPayload
	| UpdateAuthorPayload
	| DeleteAuthorPayload
	| Category
	| CategoryConnection
	| CategoryAggregator
	| CategoryGroupBy
	| CategoryConnectionId
	| CategoryConnectionCreated_At
	| CategoryConnectionUpdated_At
	| CategoryConnectionName
	| CategoryConnectionDescription
	| CreateCategoryPayload
	| UpdateCategoryPayload
	| DeleteCategoryPayload
	| Featured
	| UpdateFeaturedPayload
	| DeleteFeaturedPayload
	| Project
	| ProjectConnection
	| ProjectAggregator
	| ProjectAggregatorSum
	| ProjectAggregatorAvg
	| ProjectAggregatorMin
	| ProjectAggregatorMax
	| ProjectGroupBy
	| ProjectConnectionId
	| ProjectConnectionCreated_At
	| ProjectConnectionUpdated_At
	| ProjectConnectionTitle
	| ProjectConnectionContent
	| ProjectConnectionGithub
	| ProjectConnectionUrl
	| ProjectConnectionLikes
	| ProjectConnectionMedia
	| ProjectConnectionBg
	| ProjectConnectionPreview
	| CreateProjectPayload
	| UpdateProjectPayload
	| DeleteProjectPayload
	| UploadFile
	| UploadFileConnection
	| UploadFileAggregator
	| UploadFileAggregatorSum
	| UploadFileAggregatorAvg
	| UploadFileAggregatorMin
	| UploadFileAggregatorMax
	| UploadFileGroupBy
	| UploadFileConnectionId
	| UploadFileConnectionCreated_At
	| UploadFileConnectionUpdated_At
	| UploadFileConnectionName
	| UploadFileConnectionAlternativeText
	| UploadFileConnectionCaption
	| UploadFileConnectionWidth
	| UploadFileConnectionHeight
	| UploadFileConnectionFormats
	| UploadFileConnectionHash
	| UploadFileConnectionExt
	| UploadFileConnectionMime
	| UploadFileConnectionSize
	| UploadFileConnectionUrl
	| UploadFileConnectionPreviewUrl
	| UploadFileConnectionProvider
	| UploadFileConnectionProvider_Metadata
	| UsersPermissionsPermission
	| UsersPermissionsRole
	| UsersPermissionsRoleConnection
	| UsersPermissionsRoleAggregator
	| UsersPermissionsRoleGroupBy
	| UsersPermissionsRoleConnectionId
	| UsersPermissionsRoleConnectionName
	| UsersPermissionsRoleConnectionDescription
	| UsersPermissionsRoleConnectionType
	| CreateRolePayload
	| UpdateRolePayload
	| DeleteRolePayload
	| UsersPermissionsUser
	| UsersPermissionsUserConnection
	| UsersPermissionsUserAggregator
	| UsersPermissionsUserGroupBy
	| UsersPermissionsUserConnectionId
	| UsersPermissionsUserConnectionCreated_At
	| UsersPermissionsUserConnectionUpdated_At
	| UsersPermissionsUserConnectionUsername
	| UsersPermissionsUserConnectionEmail
	| UsersPermissionsUserConnectionProvider
	| UsersPermissionsUserConnectionConfirmed
	| UsersPermissionsUserConnectionBlocked
	| UsersPermissionsUserConnectionRole
	| CreateUserPayload
	| UpdateUserPayload
	| DeleteUserPayload

export type Mutation = {
	__typename?: 'Mutation'
	createArticle?: Maybe<CreateArticlePayload>
	updateArticle?: Maybe<UpdateArticlePayload>
	deleteArticle?: Maybe<DeleteArticlePayload>
	createAuthor?: Maybe<CreateAuthorPayload>
	updateAuthor?: Maybe<UpdateAuthorPayload>
	deleteAuthor?: Maybe<DeleteAuthorPayload>
	createCategory?: Maybe<CreateCategoryPayload>
	updateCategory?: Maybe<UpdateCategoryPayload>
	deleteCategory?: Maybe<DeleteCategoryPayload>
	updateFeatured?: Maybe<UpdateFeaturedPayload>
	deleteFeatured?: Maybe<DeleteFeaturedPayload>
	createProject?: Maybe<CreateProjectPayload>
	updateProject?: Maybe<UpdateProjectPayload>
	deleteProject?: Maybe<DeleteProjectPayload>
	createRole?: Maybe<CreateRolePayload>
	updateRole?: Maybe<UpdateRolePayload>
	deleteRole?: Maybe<DeleteRolePayload>
	createUser?: Maybe<CreateUserPayload>
	updateUser?: Maybe<UpdateUserPayload>
	deleteUser?: Maybe<DeleteUserPayload>
	upload: UploadFile
	multipleUpload: Array<Maybe<UploadFile>>
	updateFileInfo: UploadFile
	login: UsersPermissionsLoginPayload
	register: UsersPermissionsLoginPayload
	forgotPassword?: Maybe<UserPermissionsPasswordPayload>
	resetPassword?: Maybe<UsersPermissionsLoginPayload>
	emailConfirmation?: Maybe<UsersPermissionsLoginPayload>
}

export type MutationCreateArticleArgs = {
	input?: Maybe<CreateArticleInput>
}

export type MutationUpdateArticleArgs = {
	input?: Maybe<UpdateArticleInput>
}

export type MutationDeleteArticleArgs = {
	input?: Maybe<DeleteArticleInput>
}

export type MutationCreateAuthorArgs = {
	input?: Maybe<CreateAuthorInput>
}

export type MutationUpdateAuthorArgs = {
	input?: Maybe<UpdateAuthorInput>
}

export type MutationDeleteAuthorArgs = {
	input?: Maybe<DeleteAuthorInput>
}

export type MutationCreateCategoryArgs = {
	input?: Maybe<CreateCategoryInput>
}

export type MutationUpdateCategoryArgs = {
	input?: Maybe<UpdateCategoryInput>
}

export type MutationDeleteCategoryArgs = {
	input?: Maybe<DeleteCategoryInput>
}

export type MutationUpdateFeaturedArgs = {
	input?: Maybe<UpdateFeaturedInput>
}

export type MutationCreateProjectArgs = {
	input?: Maybe<CreateProjectInput>
}

export type MutationUpdateProjectArgs = {
	input?: Maybe<UpdateProjectInput>
}

export type MutationDeleteProjectArgs = {
	input?: Maybe<DeleteProjectInput>
}

export type MutationCreateRoleArgs = {
	input?: Maybe<CreateRoleInput>
}

export type MutationUpdateRoleArgs = {
	input?: Maybe<UpdateRoleInput>
}

export type MutationDeleteRoleArgs = {
	input?: Maybe<DeleteRoleInput>
}

export type MutationCreateUserArgs = {
	input?: Maybe<CreateUserInput>
}

export type MutationUpdateUserArgs = {
	input?: Maybe<UpdateUserInput>
}

export type MutationDeleteUserArgs = {
	input?: Maybe<DeleteUserInput>
}

export type MutationUploadArgs = {
	refId?: Maybe<Scalars['ID']>
	ref?: Maybe<Scalars['String']>
	field?: Maybe<Scalars['String']>
	source?: Maybe<Scalars['String']>
	file: Scalars['Upload']
}

export type MutationMultipleUploadArgs = {
	refId?: Maybe<Scalars['ID']>
	ref?: Maybe<Scalars['String']>
	field?: Maybe<Scalars['String']>
	source?: Maybe<Scalars['String']>
	files: Array<Maybe<Scalars['Upload']>>
}

export type MutationUpdateFileInfoArgs = {
	id: Scalars['ID']
	info: FileInfoInput
}

export type MutationLoginArgs = {
	input: UsersPermissionsLoginInput
}

export type MutationRegisterArgs = {
	input: UsersPermissionsRegisterInput
}

export type MutationForgotPasswordArgs = {
	email: Scalars['String']
}

export type MutationResetPasswordArgs = {
	password: Scalars['String']
	passwordConfirmation: Scalars['String']
	code: Scalars['String']
}

export type MutationEmailConfirmationArgs = {
	confirmation: Scalars['String']
}

export type Project = {
	__typename?: 'Project'
	id: Scalars['ID']
	created_at: Scalars['DateTime']
	updated_at: Scalars['DateTime']
	title: Scalars['String']
	content: Scalars['String']
	github?: Maybe<Scalars['String']>
	url?: Maybe<Scalars['String']>
	likes: Scalars['Int']
	media?: Maybe<Scalars['JSON']>
	bg: Scalars['String']
	preview?: Maybe<Scalars['String']>
	categories?: Maybe<Array<Maybe<Category>>>
	articles?: Maybe<Array<Maybe<Article>>>
}

export type ProjectCategoriesArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
}

export type ProjectArticlesArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
}

export type ProjectAggregator = {
	__typename?: 'ProjectAggregator'
	count?: Maybe<Scalars['Int']>
	totalCount?: Maybe<Scalars['Int']>
	sum?: Maybe<ProjectAggregatorSum>
	avg?: Maybe<ProjectAggregatorAvg>
	min?: Maybe<ProjectAggregatorMin>
	max?: Maybe<ProjectAggregatorMax>
}

export type ProjectAggregatorAvg = {
	__typename?: 'ProjectAggregatorAvg'
	likes?: Maybe<Scalars['Float']>
}

export type ProjectAggregatorMax = {
	__typename?: 'ProjectAggregatorMax'
	likes?: Maybe<Scalars['Float']>
}

export type ProjectAggregatorMin = {
	__typename?: 'ProjectAggregatorMin'
	likes?: Maybe<Scalars['Float']>
}

export type ProjectAggregatorSum = {
	__typename?: 'ProjectAggregatorSum'
	likes?: Maybe<Scalars['Float']>
}

export type ProjectConnection = {
	__typename?: 'ProjectConnection'
	values?: Maybe<Array<Maybe<Project>>>
	groupBy?: Maybe<ProjectGroupBy>
	aggregate?: Maybe<ProjectAggregator>
}

export type ProjectConnectionBg = {
	__typename?: 'ProjectConnectionBg'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<ProjectConnection>
}

export type ProjectConnectionContent = {
	__typename?: 'ProjectConnectionContent'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<ProjectConnection>
}

export type ProjectConnectionCreated_At = {
	__typename?: 'ProjectConnectionCreated_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<ProjectConnection>
}

export type ProjectConnectionGithub = {
	__typename?: 'ProjectConnectionGithub'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<ProjectConnection>
}

export type ProjectConnectionId = {
	__typename?: 'ProjectConnectionId'
	key?: Maybe<Scalars['ID']>
	connection?: Maybe<ProjectConnection>
}

export type ProjectConnectionLikes = {
	__typename?: 'ProjectConnectionLikes'
	key?: Maybe<Scalars['Int']>
	connection?: Maybe<ProjectConnection>
}

export type ProjectConnectionMedia = {
	__typename?: 'ProjectConnectionMedia'
	key?: Maybe<Scalars['JSON']>
	connection?: Maybe<ProjectConnection>
}

export type ProjectConnectionPreview = {
	__typename?: 'ProjectConnectionPreview'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<ProjectConnection>
}

export type ProjectConnectionTitle = {
	__typename?: 'ProjectConnectionTitle'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<ProjectConnection>
}

export type ProjectConnectionUpdated_At = {
	__typename?: 'ProjectConnectionUpdated_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<ProjectConnection>
}

export type ProjectConnectionUrl = {
	__typename?: 'ProjectConnectionUrl'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<ProjectConnection>
}

export type ProjectGroupBy = {
	__typename?: 'ProjectGroupBy'
	id?: Maybe<Array<Maybe<ProjectConnectionId>>>
	created_at?: Maybe<Array<Maybe<ProjectConnectionCreated_At>>>
	updated_at?: Maybe<Array<Maybe<ProjectConnectionUpdated_At>>>
	title?: Maybe<Array<Maybe<ProjectConnectionTitle>>>
	content?: Maybe<Array<Maybe<ProjectConnectionContent>>>
	github?: Maybe<Array<Maybe<ProjectConnectionGithub>>>
	url?: Maybe<Array<Maybe<ProjectConnectionUrl>>>
	likes?: Maybe<Array<Maybe<ProjectConnectionLikes>>>
	media?: Maybe<Array<Maybe<ProjectConnectionMedia>>>
	bg?: Maybe<Array<Maybe<ProjectConnectionBg>>>
	preview?: Maybe<Array<Maybe<ProjectConnectionPreview>>>
}

export type ProjectInput = {
	title: Scalars['String']
	content: Scalars['String']
	categories?: Maybe<Array<Maybe<Scalars['ID']>>>
	github?: Maybe<Scalars['String']>
	url?: Maybe<Scalars['String']>
	likes?: Maybe<Scalars['Int']>
	media?: Maybe<Scalars['JSON']>
	bg: Scalars['String']
	preview?: Maybe<Scalars['String']>
	articles?: Maybe<Array<Maybe<Scalars['ID']>>>
	created_by?: Maybe<Scalars['ID']>
	updated_by?: Maybe<Scalars['ID']>
}

export type Query = {
	__typename?: 'Query'
	article?: Maybe<Article>
	articles?: Maybe<Array<Maybe<Article>>>
	articlesConnection?: Maybe<ArticleConnection>
	author?: Maybe<Author>
	authors?: Maybe<Array<Maybe<Author>>>
	authorsConnection?: Maybe<AuthorConnection>
	category?: Maybe<Category>
	categories?: Maybe<Array<Maybe<Category>>>
	categoriesConnection?: Maybe<CategoryConnection>
	featured?: Maybe<Featured>
	project?: Maybe<Project>
	projects?: Maybe<Array<Maybe<Project>>>
	projectsConnection?: Maybe<ProjectConnection>
	files?: Maybe<Array<Maybe<UploadFile>>>
	filesConnection?: Maybe<UploadFileConnection>
	role?: Maybe<UsersPermissionsRole>
	roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>
	rolesConnection?: Maybe<UsersPermissionsRoleConnection>
	user?: Maybe<UsersPermissionsUser>
	users?: Maybe<Array<Maybe<UsersPermissionsUser>>>
	usersConnection?: Maybe<UsersPermissionsUserConnection>
	me?: Maybe<UsersPermissionsMe>
}

export type QueryArticleArgs = {
	id: Scalars['ID']
}

export type QueryArticlesArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
}

export type QueryArticlesConnectionArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
}

export type QueryAuthorArgs = {
	id: Scalars['ID']
}

export type QueryAuthorsArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
}

export type QueryAuthorsConnectionArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
}

export type QueryCategoryArgs = {
	id: Scalars['ID']
}

export type QueryCategoriesArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
}

export type QueryCategoriesConnectionArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
}

export type QueryProjectArgs = {
	id: Scalars['ID']
}

export type QueryProjectsArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
}

export type QueryProjectsConnectionArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
}

export type QueryFilesArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
}

export type QueryFilesConnectionArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
}

export type QueryRoleArgs = {
	id: Scalars['ID']
}

export type QueryRolesArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
}

export type QueryRolesConnectionArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
}

export type QueryUserArgs = {
	id: Scalars['ID']
}

export type QueryUsersArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
}

export type QueryUsersConnectionArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
}

export type RoleInput = {
	name: Scalars['String']
	description?: Maybe<Scalars['String']>
	type?: Maybe<Scalars['String']>
	permissions?: Maybe<Array<Maybe<Scalars['ID']>>>
	users?: Maybe<Array<Maybe<Scalars['ID']>>>
	created_by?: Maybe<Scalars['ID']>
	updated_by?: Maybe<Scalars['ID']>
}

export type UpdateArticleInput = {
	where?: Maybe<InputId>
	data?: Maybe<EditArticleInput>
}

export type UpdateArticlePayload = {
	__typename?: 'updateArticlePayload'
	article?: Maybe<Article>
}

export type UpdateAuthorInput = {
	where?: Maybe<InputId>
	data?: Maybe<EditAuthorInput>
}

export type UpdateAuthorPayload = {
	__typename?: 'updateAuthorPayload'
	author?: Maybe<Author>
}

export type UpdateCategoryInput = {
	where?: Maybe<InputId>
	data?: Maybe<EditCategoryInput>
}

export type UpdateCategoryPayload = {
	__typename?: 'updateCategoryPayload'
	category?: Maybe<Category>
}

export type UpdateFeaturedInput = {
	data?: Maybe<EditFeaturedInput>
}

export type UpdateFeaturedPayload = {
	__typename?: 'updateFeaturedPayload'
	featured?: Maybe<Featured>
}

export type UpdateProjectInput = {
	where?: Maybe<InputId>
	data?: Maybe<EditProjectInput>
}

export type UpdateProjectPayload = {
	__typename?: 'updateProjectPayload'
	project?: Maybe<Project>
}

export type UpdateRoleInput = {
	where?: Maybe<InputId>
	data?: Maybe<EditRoleInput>
}

export type UpdateRolePayload = {
	__typename?: 'updateRolePayload'
	role?: Maybe<UsersPermissionsRole>
}

export type UpdateUserInput = {
	where?: Maybe<InputId>
	data?: Maybe<EditUserInput>
}

export type UpdateUserPayload = {
	__typename?: 'updateUserPayload'
	user?: Maybe<UsersPermissionsUser>
}

export type UploadFile = {
	__typename?: 'UploadFile'
	id: Scalars['ID']
	created_at: Scalars['DateTime']
	updated_at: Scalars['DateTime']
	name: Scalars['String']
	alternativeText?: Maybe<Scalars['String']>
	caption?: Maybe<Scalars['String']>
	width?: Maybe<Scalars['Int']>
	height?: Maybe<Scalars['Int']>
	formats?: Maybe<Scalars['JSON']>
	hash: Scalars['String']
	ext?: Maybe<Scalars['String']>
	mime: Scalars['String']
	size: Scalars['Float']
	url: Scalars['String']
	previewUrl?: Maybe<Scalars['String']>
	provider: Scalars['String']
	provider_metadata?: Maybe<Scalars['JSON']>
	related?: Maybe<Array<Maybe<Morph>>>
}

export type UploadFileRelatedArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
}

export type UploadFileAggregator = {
	__typename?: 'UploadFileAggregator'
	count?: Maybe<Scalars['Int']>
	totalCount?: Maybe<Scalars['Int']>
	sum?: Maybe<UploadFileAggregatorSum>
	avg?: Maybe<UploadFileAggregatorAvg>
	min?: Maybe<UploadFileAggregatorMin>
	max?: Maybe<UploadFileAggregatorMax>
}

export type UploadFileAggregatorAvg = {
	__typename?: 'UploadFileAggregatorAvg'
	width?: Maybe<Scalars['Float']>
	height?: Maybe<Scalars['Float']>
	size?: Maybe<Scalars['Float']>
}

export type UploadFileAggregatorMax = {
	__typename?: 'UploadFileAggregatorMax'
	width?: Maybe<Scalars['Float']>
	height?: Maybe<Scalars['Float']>
	size?: Maybe<Scalars['Float']>
}

export type UploadFileAggregatorMin = {
	__typename?: 'UploadFileAggregatorMin'
	width?: Maybe<Scalars['Float']>
	height?: Maybe<Scalars['Float']>
	size?: Maybe<Scalars['Float']>
}

export type UploadFileAggregatorSum = {
	__typename?: 'UploadFileAggregatorSum'
	width?: Maybe<Scalars['Float']>
	height?: Maybe<Scalars['Float']>
	size?: Maybe<Scalars['Float']>
}

export type UploadFileConnection = {
	__typename?: 'UploadFileConnection'
	values?: Maybe<Array<Maybe<UploadFile>>>
	groupBy?: Maybe<UploadFileGroupBy>
	aggregate?: Maybe<UploadFileAggregator>
}

export type UploadFileConnectionAlternativeText = {
	__typename?: 'UploadFileConnectionAlternativeText'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionCaption = {
	__typename?: 'UploadFileConnectionCaption'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionCreated_At = {
	__typename?: 'UploadFileConnectionCreated_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionExt = {
	__typename?: 'UploadFileConnectionExt'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionFormats = {
	__typename?: 'UploadFileConnectionFormats'
	key?: Maybe<Scalars['JSON']>
	connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionHash = {
	__typename?: 'UploadFileConnectionHash'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionHeight = {
	__typename?: 'UploadFileConnectionHeight'
	key?: Maybe<Scalars['Int']>
	connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionId = {
	__typename?: 'UploadFileConnectionId'
	key?: Maybe<Scalars['ID']>
	connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionMime = {
	__typename?: 'UploadFileConnectionMime'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionName = {
	__typename?: 'UploadFileConnectionName'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionPreviewUrl = {
	__typename?: 'UploadFileConnectionPreviewUrl'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionProvider = {
	__typename?: 'UploadFileConnectionProvider'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionProvider_Metadata = {
	__typename?: 'UploadFileConnectionProvider_metadata'
	key?: Maybe<Scalars['JSON']>
	connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionSize = {
	__typename?: 'UploadFileConnectionSize'
	key?: Maybe<Scalars['Float']>
	connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionUpdated_At = {
	__typename?: 'UploadFileConnectionUpdated_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionUrl = {
	__typename?: 'UploadFileConnectionUrl'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionWidth = {
	__typename?: 'UploadFileConnectionWidth'
	key?: Maybe<Scalars['Int']>
	connection?: Maybe<UploadFileConnection>
}

export type UploadFileGroupBy = {
	__typename?: 'UploadFileGroupBy'
	id?: Maybe<Array<Maybe<UploadFileConnectionId>>>
	created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>
	updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>
	name?: Maybe<Array<Maybe<UploadFileConnectionName>>>
	alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>
	caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>
	width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>
	height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>
	formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>
	hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>
	ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>
	mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>
	size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>
	url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>
	previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>
	provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>
	provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>
}

export type UserInput = {
	username: Scalars['String']
	email: Scalars['String']
	provider?: Maybe<Scalars['String']>
	password?: Maybe<Scalars['String']>
	resetPasswordToken?: Maybe<Scalars['String']>
	confirmed?: Maybe<Scalars['Boolean']>
	blocked?: Maybe<Scalars['Boolean']>
	role?: Maybe<Scalars['ID']>
	created_by?: Maybe<Scalars['ID']>
	updated_by?: Maybe<Scalars['ID']>
}

export type UserPermissionsPasswordPayload = {
	__typename?: 'UserPermissionsPasswordPayload'
	ok: Scalars['Boolean']
}

export type UsersPermissionsLoginInput = {
	identifier: Scalars['String']
	password: Scalars['String']
	provider?: Maybe<Scalars['String']>
}

export type UsersPermissionsLoginPayload = {
	__typename?: 'UsersPermissionsLoginPayload'
	jwt?: Maybe<Scalars['String']>
	user: UsersPermissionsMe
}

export type UsersPermissionsMe = {
	__typename?: 'UsersPermissionsMe'
	id: Scalars['ID']
	username: Scalars['String']
	email: Scalars['String']
	confirmed?: Maybe<Scalars['Boolean']>
	blocked?: Maybe<Scalars['Boolean']>
	role?: Maybe<UsersPermissionsMeRole>
}

export type UsersPermissionsMeRole = {
	__typename?: 'UsersPermissionsMeRole'
	id: Scalars['ID']
	name: Scalars['String']
	description?: Maybe<Scalars['String']>
	type?: Maybe<Scalars['String']>
}

export type UsersPermissionsPermission = {
	__typename?: 'UsersPermissionsPermission'
	id: Scalars['ID']
	type: Scalars['String']
	controller: Scalars['String']
	action: Scalars['String']
	enabled: Scalars['Boolean']
	policy?: Maybe<Scalars['String']>
	role?: Maybe<UsersPermissionsRole>
}

export type UsersPermissionsRegisterInput = {
	username: Scalars['String']
	email: Scalars['String']
	password: Scalars['String']
}

export type UsersPermissionsRole = {
	__typename?: 'UsersPermissionsRole'
	id: Scalars['ID']
	name: Scalars['String']
	description?: Maybe<Scalars['String']>
	type?: Maybe<Scalars['String']>
	permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>
	users?: Maybe<Array<Maybe<UsersPermissionsUser>>>
}

export type UsersPermissionsRolePermissionsArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
}

export type UsersPermissionsRoleUsersArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
}

export type UsersPermissionsRoleAggregator = {
	__typename?: 'UsersPermissionsRoleAggregator'
	count?: Maybe<Scalars['Int']>
	totalCount?: Maybe<Scalars['Int']>
}

export type UsersPermissionsRoleConnection = {
	__typename?: 'UsersPermissionsRoleConnection'
	values?: Maybe<Array<Maybe<UsersPermissionsRole>>>
	groupBy?: Maybe<UsersPermissionsRoleGroupBy>
	aggregate?: Maybe<UsersPermissionsRoleAggregator>
}

export type UsersPermissionsRoleConnectionDescription = {
	__typename?: 'UsersPermissionsRoleConnectionDescription'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<UsersPermissionsRoleConnection>
}

export type UsersPermissionsRoleConnectionId = {
	__typename?: 'UsersPermissionsRoleConnectionId'
	key?: Maybe<Scalars['ID']>
	connection?: Maybe<UsersPermissionsRoleConnection>
}

export type UsersPermissionsRoleConnectionName = {
	__typename?: 'UsersPermissionsRoleConnectionName'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<UsersPermissionsRoleConnection>
}

export type UsersPermissionsRoleConnectionType = {
	__typename?: 'UsersPermissionsRoleConnectionType'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<UsersPermissionsRoleConnection>
}

export type UsersPermissionsRoleGroupBy = {
	__typename?: 'UsersPermissionsRoleGroupBy'
	id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>
	name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>
	description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>
	type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>
}

export type UsersPermissionsUser = {
	__typename?: 'UsersPermissionsUser'
	id: Scalars['ID']
	created_at: Scalars['DateTime']
	updated_at: Scalars['DateTime']
	username: Scalars['String']
	email: Scalars['String']
	provider?: Maybe<Scalars['String']>
	confirmed?: Maybe<Scalars['Boolean']>
	blocked?: Maybe<Scalars['Boolean']>
	role?: Maybe<UsersPermissionsRole>
}

export type UsersPermissionsUserAggregator = {
	__typename?: 'UsersPermissionsUserAggregator'
	count?: Maybe<Scalars['Int']>
	totalCount?: Maybe<Scalars['Int']>
}

export type UsersPermissionsUserConnection = {
	__typename?: 'UsersPermissionsUserConnection'
	values?: Maybe<Array<Maybe<UsersPermissionsUser>>>
	groupBy?: Maybe<UsersPermissionsUserGroupBy>
	aggregate?: Maybe<UsersPermissionsUserAggregator>
}

export type UsersPermissionsUserConnectionBlocked = {
	__typename?: 'UsersPermissionsUserConnectionBlocked'
	key?: Maybe<Scalars['Boolean']>
	connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionConfirmed = {
	__typename?: 'UsersPermissionsUserConnectionConfirmed'
	key?: Maybe<Scalars['Boolean']>
	connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionCreated_At = {
	__typename?: 'UsersPermissionsUserConnectionCreated_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionEmail = {
	__typename?: 'UsersPermissionsUserConnectionEmail'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionId = {
	__typename?: 'UsersPermissionsUserConnectionId'
	key?: Maybe<Scalars['ID']>
	connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionProvider = {
	__typename?: 'UsersPermissionsUserConnectionProvider'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionRole = {
	__typename?: 'UsersPermissionsUserConnectionRole'
	key?: Maybe<Scalars['ID']>
	connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionUpdated_At = {
	__typename?: 'UsersPermissionsUserConnectionUpdated_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionUsername = {
	__typename?: 'UsersPermissionsUserConnectionUsername'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserGroupBy = {
	__typename?: 'UsersPermissionsUserGroupBy'
	id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>
	created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>
	updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>
	username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>
	email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>
	provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>
	confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>
	blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>
	role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>
}
