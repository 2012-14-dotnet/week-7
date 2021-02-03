using System;
using Xunit;

namespace TestingDemo.Testing
{
  public class UnitTest1
  {
    [Fact]
    public void Test1()
    {
      var sut = new WeatherForecastController();

      Assert.NotNull(sut.Get())
      Assert.IsType<IEnumerable<WeatherForecast>>(sut.Get());
    }
  }
}
