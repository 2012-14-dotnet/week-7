FROM mcr.microsoft.com/dotnet/sdk as base

WORKDIR /workspace
COPY webapi .
RUN dotnet build -c Release
RUN dotnet publish --no-build -c Release -o out MsaDemo.Service/*.csproj

FROM mcr.microsoft.com/dotnet/aspnet

WORKDIR /workspace
COPY --from=base workspace/out .
CMD [ "dotnet", "MsaDemo.Service.dll" ]
