

create table Brands
(
	ID int primary key identity,
	[Name] nvarchar(50) not null
)

create table Categories
(
	ID int primary key identity,
	[Name] nvarchar(50) not null
)

create table Countries
(
	ID int primary key identity,
	[Name] nvarchar(50) not null
)

create table OrderStatus
(
	ID int primary key identity,
	[Status] nvarchar not null
)

create table Suppliers
(
	ID int primary key identity,
	[Name] nvarchar(50) not null
)

create table Stocks
(
	ID int primary key identity,
	[Count] int
)

create table PaymentsMethods
(
	ID int primary key identity,
	[Name] nvarchar(50) not null
)

create table Payments
(
	ID int primary key identity,
	PaymentsMethodsID int foreign key references PaymentsMethods(ID),
)
create table Basket
(
	ID int primary key identity,
	[Name] nvarchar(50) not null
)

create table Questions
(
	ID int primary key identity,
	[Description] nvarchar(20) not null
)

create table ProductFAQs
(
	ID int primary key identity,
	QuestionsID int foreign key references Questions(ID)
)

create table Adresses
(
	ID int primary key identity,
	City nvarchar(50) not null,
	Street nvarchar(50) not null,
	Building nvarchar(50) not null,
	CountryID int foreign key references Countries(ID)

)

create table Customers 
(
	ID int primary key identity,
	[Name] nvarchar(50) not null,
	SurName nvarchar(50) not null,
	Email nvarchar(50) not null,
	Mobile nvarchar(50) not null,
	AdressesID int foreign key references Adresses(ID),
	BasketID int foreign key references Basket(ID)
)

create table Products
(
	ID int primary key identity,
	[Name] nvarchar(50) not null,
	Price float,
	[Description] nvarchar(500) not null,
	BrandID int foreign key references Brands(ID),
	CategoriesID int foreign key references Categories(ID),
	SuppliersID int foreign key references Suppliers(ID),
	ProductFAQsID int foreign key references ProductFAQs(ID)
)

create table Orders
(
	ID int primary key identity,
	OrderNo nvarchar(50) not null,
	CustomerID int foreign key references Customers(ID),
	OrderStatusID int foreign key references OrderStatus(ID),
	PaymentsID int foreign key references Payments(ID)
)

create table OrdersItems
(
	ID int primary key identity,
	[Count] int,
	Price float,
	OrdersID int foreign key references Orders(ID),
	ProductsID int foreign key references Products(ID)
)

create table ProductsStocks
(
	ID int primary key identity,
	ProductsID int foreign key references Products(ID),
	StocksID int foreign key references Stocks(ID)
)

create table Coupons
(
	ID int primary key identity,
	[Name] nvarchar(50) not null,
	Price float,
	IsValid tinyint,
	CustomersID int foreign key references Customers(ID)
)

create table Reviews
(
	ID int primary key identity,
	[Description] nvarchar(500) not null,
	ProductsID int foreign key references Products(ID),
	CustomersID int foreign key references Customers(ID)
)

create table ProductsBaskets
(
	ID int primary key identity,
	ProductsID int foreign key references Products(ID),
	BasketsID int foreign key references Basket(ID)
)

