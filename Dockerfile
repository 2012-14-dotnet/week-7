FROM mcr.microsoft.com/dotnet/sdk as base

WORKDIR /workspace
COPY mvc .
RUN dotnet build -c Release
RUN dotnet publish --no-build -c Release -o out SecurityDemo.Client/*.csproj

FROM mcr.microsoft.com/dotnet/aspnet

WORKDIR /workspace
COPY --from=base out .
CMD [ "dotnet", "SecurityDemo.Client.dll" ]
